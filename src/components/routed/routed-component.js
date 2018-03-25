import React, {Component} from 'react'

import Header from '../default/header'
import TimeTable from '../default/timetable'

import {changeField} from '../../actions/form-actions'
import { connect } from 'react-redux'
import {loadFaculties} from '../../actions/load-actions'
import {preloadPage} from '../../actions/preload'

class RoutedComponent extends Component {
    componentDidMount() {
        this.props.loadFaculties()
        console.log('Факультет: ', this.props.match.params.faculty)
        console.log('Уровень образования: ', this.props.match.params.level)
        console.log('Курс: ', this.props.match.params.course)
    }
    render() {
        return [
            <Header key={0} />,
            <TimeTable key={1} />
        ]
    }
}

export default connect(
    state => ({
        faculties: state.faculties,
        levels: state.levels,
        semesters: state.semesters,
        courses: state.courses
    }), 
    {changeField, loadFaculties, preloadPage}
)(RoutedComponent)
