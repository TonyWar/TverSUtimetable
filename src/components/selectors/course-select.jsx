import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {updateField} from '../../actions/form-actions'

import { findCurrentFaculty } from '../../constants/functions'

class CourseSelect extends Component {
    handleChangeCourse = e => {
        this.props.updateField('course', e.target.innerHTML, {
            ID: findCurrentFaculty(this.props.fields.faculty, this.props.faculties)._id,
            year: this.props.semesters[this.props.fields.semester].year,
            semester: this.props.semesters[this.props.fields.semester].semester,
            level: this.props.fields.level,
            course: e.target.innerHTML
        })
    }
    
    indexOfCurrentCourse = () => {
        return this.props.fields.course
    }

    render() {
        if (this.props.courses.length === 0) { return null }
        return (
            <div className='navbar-item'>
                {
                    this.props.courses.map((course, key) => (
                        <button key={key} className={'button ' + (this.indexOfCurrentCourse() === course ? 'is-info' : '')} onClick={this.handleChangeCourse} >{course}</button>
                    ))
                }
                {/* <select className='select' value={this.indexOfCurrentCourse()} onChange={this.handleChangeCourse}>
                    { this.props.courses.map((course, key) => (
                        <option key={key} value={course}>{course}</option>
                    ))}
                </select> */}
            </div>
        )
    }

    static propTypes = {
        semesters: PropTypes.array,
        fields: PropTypes.object,
        updateField: PropTypes.func,
        faculties: PropTypes.array,
        levels: PropTypes.array,
        courses: PropTypes.array
    }
}

export default connect(
    state => ({
        faculties: state.faculties,
        semesters: state.semesters,
        levels: state.levels,
        fields: state.formFields,
        courses: state.courses
    }),
    { updateField }
)(CourseSelect)
