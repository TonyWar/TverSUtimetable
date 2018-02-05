import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {changeField} from '../../actions/form-actions'

class SemesterSelect extends Component {
    handleChangeSemester = e => {
        if (e.target.value === '-1') return
        this.props.changeField('semester', e.target.value, {
            ID: this.props.faculties[this.props.fields.faculty]._id,
            year: this.props.semesters[e.target.value].year,
            semester: this.props.semesters[e.target.value].semester
        })
        console.log('Выбран семестр:', this.props.semesters[e.target.value].year + ' ' + this.props.semesters[e.target.value].semester)
        // Делаем запрос по факультету и семестру
    }

    render() {
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
        changeField: PropTypes.func,
        faculties: PropTypes.array
    }
}

export default connect(
    state => ({
        faculties: state.faculties,
        semesters: state.semesters,
        fields: state.formFields
    }),
    { changeField }
)(SemesterSelect)
