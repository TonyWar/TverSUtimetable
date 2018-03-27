import React, {Component} from 'react'

import Header from '../default/header'
import TimeTable from '../default/timetable'

import {changeField} from '../../actions/form-actions'
import { connect } from 'react-redux'
import {loadFaculties} from '../../actions/load-actions'
import {preloadPage} from '../../actions/preload'

import PropTypes from 'prop-types'

import { findCurrentFaculty } from '../../constants/functions'

import { Redirect } from 'react-router'

class RoutedComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notFound: true
        }
    }

    componentWillMount() {
        this.props.loadFaculties()
    }

    componentDidMount() {
        console.log('Компонент был примонтирован')
    }

    componentWillReceiveProps(nextProps) {
        // console.log('Были получены новые props: ', nextProps.formFields)
        const facultyURL = this.props.match.params.faculty
        // Случай когда сайт только открывается и данных пока нет вообще
        if (this.props.faculties.length === 0 && nextProps.faculties.length > 0) {
            // Сейчас url показывает данные, которые нужно показать
            if (this.props.formFields.faculty !== facultyURL) {
                // Поиск факультета по абрривеатуре
                const faculty = findCurrentFaculty(facultyURL, nextProps.faculties)
                if (!faculty) { this.setState({notFound: true}) }
                else {
                    this.props.changeField('faculty', facultyURL, faculty)
                }
            }
        }
        // мы получили список семестров в первый раз, поэтому должны подгрузить список курсов и уровни образования
        if (this.props.semesters.length === 0 && nextProps.semesters.length > 0) {
            this.props.changeField('semester', '0', {
                ...nextProps.semesters[0],
                ID: findCurrentFaculty(facultyURL, this.props.faculties)._id
            })
            this.setState({notFound: false})
        }
        // Мы получили список level'ов (в первый раз), надо взять с URL нужный level
        if (this.props.levels.length === 0 && nextProps.levels.length > 0) {
            const levelURL = this.props.match.params.level
            if (nextProps.levels.indexOf(levelURL) === -1) {
                this.setState({notFound: true})
            } else {
                this.props.changeField('level', levelURL, {
                    ID: findCurrentFaculty(facultyURL, this.props.faculties)._id,
                    year: this.props.semesters[this.props.formFields.semester].year,
                    semester: this.props.semesters[this.props.formFields.semester].semester,
                    level: levelURL
                })
                this.setState({notFound: false})
            }
        }
        // Мы получили список курсов, подгружаем расписание для выбранного курса
        if (this.props.courses.length === 0 && nextProps.courses.length > 0) {
            const courseURL = this.props.match.params.course
            if (nextProps.courses.indexOf(courseURL) === -1) {
                this.setState({notFound: true})
            } else {
                this.props.changeField('course', courseURL, {
                    ID: findCurrentFaculty(facultyURL, this.props.faculties)._id,
                    year: this.props.semesters[this.props.formFields.semester].year,
                    semester: this.props.semesters[this.props.formFields.semester].semester,
                    level: this.props.formFields.level,
                    course: courseURL
                })
                this.setState({notFound: false})
            }
        }
        if (Object.keys(this.props.timetable).length > 0) {
            this.setState({notFound: false})
        }
    }

    render() {
        let redirect = ''
        let timetable = <h1 key={1}> Расписание с такими данными не найдено </h1>

        if (!this.state.notFound && Object.keys(this.props.timetable).length > 0) {
            timetable = <TimeTable key={1} />
        }
        const facultyURL = this.props.match.params.faculty
        const levelURL = this.props.match.params.level
        const courseURL = this.props.match.params.course 

        if (this.props.formFields.faculty !== '-1' && this.props.formFields.level !== '-1' && this.props.formFields.course !== '-1'
            && (facultyURL !== this.props.formFields.faculty 
            || levelURL !== this.props.formFields.level 
            || courseURL !== this.props.formFields.course)) {
            redirect = <Redirect key={2} to={'/' + this.props.formFields.faculty + '/' + this.props.formFields.level + '/' + this.props.formFields.course} />
        }
        return [
            <Header key={0} />,
            timetable,
            redirect
        ]
    }

    static propTypes = {
        loadFaculties: PropTypes.func,
        changeField: PropTypes.func,
        faculties: PropTypes.array,
        semesters: PropTypes.array,
        levels: PropTypes.array,
        courses: PropTypes.array,
        formFields: PropTypes.object,
        match: PropTypes.object,
        timetable: PropTypes.object
    }
}

export default connect(
    state => ({
        faculties: state.faculties,
        levels: state.levels,
        semesters: state.semesters,
        courses: state.courses,
        formFields: state.formFields,
        timetable: state.timetable
    }), 
    {changeField, loadFaculties, preloadPage}
)(RoutedComponent)
