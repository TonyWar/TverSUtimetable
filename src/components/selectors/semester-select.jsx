import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {updateField} from '../../actions/form-actions'

import { findCurrentFaculty } from '../../constants/functions'

class SemesterSelect extends Component {
    handleChangeSemester = e => {
        if (e.target.value === '-1') return
        this.props.updateField('semester', e.target.value, {
            ID: findCurrentFaculty(this.props.fields.faculty, this.props.faculties)._id,
            year: this.props.semesters[e.target.value].year,
            semester: this.props.semesters[e.target.value].semester
        })
    }

    render() {
        if (this.props.semesters.length === 0) { return null }
        return (
            <div className='navbar-item' >
                <select className='select' value={this.props.fields.semester} onChange={this.handleChangeSemester}>
                    <option value='-1'> Выберите семестр </option>
                    { this.props.semesters.map((item, key) => (
                        <option key={key} value={key}> {item.year + ' ' + item.semester} </option>
                    ))}
                </select>
            </div>
        )
    }

    static propTypes = {
        semesters: PropTypes.array,
        fields: PropTypes.object,
        updateField: PropTypes.func,
        faculties: PropTypes.array
    }
}

export default connect(
    state => ({
        faculties: state.faculties,
        semesters: state.semesters,
        fields: state.formFields
    }),
    { updateField }
)(SemesterSelect)
