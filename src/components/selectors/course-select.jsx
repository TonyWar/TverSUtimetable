import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {changeField} from '../../actions/form-actions'

class CourseSelect extends Component {
    handleChangeCourse = e => {
        this.props.changeField('course', e.target.value, {
            ID: this.props.faculties[this.props.fields.faculty]._id,
            year: this.props.semesters[this.props.fields.semester].year,
            semester: this.props.semesters[this.props.fields.semester].semester,
            level: this.props.levels[this.props.fields.level],
            course: this.props.courses[e.target.value]
        })
        localStorage.course = this.props.courses[e.target.value]
    }
    
    render() {
        if (this.props.courses.length === 0) { return null }
        return (
            <div className='navbar-item' value={this.props.fields.cource} onChange={this.handleChangeCourse}>
                <select className='select' >
                    { this.props.courses.map((course, key) => (
                        <option key={key} value={key}>{course}</option>
                    ))}
                </select>
            </div>
        )
    }

    static propTypes = {
        semesters: PropTypes.array,
        fields: PropTypes.object,
        changeField: PropTypes.func,
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
    { changeField }
)(CourseSelect)
