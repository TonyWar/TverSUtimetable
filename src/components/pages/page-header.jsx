import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getFaculties } from '../../actions/faculties-actions'
import { getTimetables } from '../../actions/timetables-actions'
import {changeField} from '../../actions/form-actions'
import PropTypes from 'prop-types'
import axios from 'axios'

class PageHeader extends Component {
    constructor(props) {
        super(props)
        this.levels = [
            'Бакалавриат',
            'Магистратура',
            'Аспирантура'
        ]
        // Индексы выбранных полей
        this.state = {
            faculty: '-1',
            semester: '-1',
            level: '0',
            course: '1',
            courses: []
        }
    }

    componentDidMount() {
        this.props.getFaculties()
    }

    handleChangeSemester = e => {
        if (e.target.value === '-1') return
        console.log('выбран:', this.props.semesters[e.target.value])
        this.setState({semester: e.target.value})
    }

    handleChangeFaculty = e => {
        if (e.target.value === '-1') return
        this.props.getTimetables(this.props.faculties[e.target.value]._id)
        this.props.changeField('faculty', e.target.value)
        // this.setState({faculty: e.target.value})
    }

    handleChangeLevel = e => {
        this.setState({level: e.target.value}, () => {
            console.log(this.props.semesters[this.state.semester], this.props.semesters, this.state.semester)
            axios.get('http://81.177.142.218:1337' + '/timetable/' + this.props.semesters[this.state.semester].year + '/' + this.props.semesters[this.state.semester].semester + '/' + this.props.faculties[this.state.faculty]._id + '/' + this.levels[this.state.level] )
                .then(
                    res => {
                        console.log('aaaa')
                        console.log(res.data)
                        const courses = []
                        res.data.courses.forEach(course => {
                            if (courses.indexOf(course) < 0) {
                                courses.push(course)
                            }
                        })
                        this.setState({courses: courses})
                    }
                )
        })
    }

    handleChangeCourse = e => {
        console.log(e.target.value)
        this.setState({course: e.target.value})
    }

    render() {
        return (
            <div>
                <header className='header'>
                    <div/>
                    <div>
                        <div className='header-logo' />
                        <div className='select'>
                            <select value={this.props.fields.faculty} onChange={this.handleChangeFaculty}>
                                <option value='-1'> Выберите факультет </option>
                                { this.props.faculties.map((items, key) => (
                                    <option key={key} value={key}> {items.name} </option>
                                ))}
                            </select>
                        </div>
                        <div className='select'>
                            <select defaultChecked='-1' onChange={this.handleChangeSemester}>
                                <option value='-1'> Выберите семестр </option>
                                { this.props.semesters.map((item, key) => (
                                    <option key={key} value={key}> {item.year + ' ' + item.semester} </option>
                                ))}
                            </select>
                        </div>
                        <div className='select'>
                            <select onChange={this.handleChangeLevel}>
                                { this.levels.map((level, key) => (
                                    <option key={key} value={key}>{level}</option>
                                ))}
                            </select>
                        </div>
                        <div className='select'>
                            <select onChange={this.handleChangeCourse}>
                                { this.state.courses.map((course, key) => (
                                    <option key={key} value={course}>{course}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div/>
                </header>
                
                <div />
            </div>
        )
    }

    static propTypes = {
        getFaculties: PropTypes.func,
        getTimetables: PropTypes.func,
        faculties: PropTypes.array,
        semesters: PropTypes.array,
        fields: PropTypes.object,
        changeField: PropTypes.func
    }
}

export default connect(
    state => ({
        faculties: state.faculties,
        semesters: state.semesters,
        fields: state.formFields
    }),
    {getFaculties, getTimetables, changeField}
)(PageHeader)
