import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {updateField} from '../../actions/form-actions'

class FacultySelect extends Component {
    handleChangeFaculty = e => {
        if (e.target.value === '-1') return
        const newCurrentFaculty = this.props.faculties[e.target.value]
        this.props.updateField('faculty', newCurrentFaculty.abbr, newCurrentFaculty)
    }

    indexOfCurrendFaculty = () => {
        for (let i = 0; i < this.props.faculties.length; i++) {
            const faculty = this.props.faculties[i]
            if (faculty.abbr === this.props.selectedFaculty) {
                return i
            }
        }
        return -1
    }

    render() {
        return (
            <div className='navbar-item' >
                <select className='select' value={this.indexOfCurrendFaculty()} onChange={this.handleChangeFaculty} >
                    <option value='-1'> Выберите факультет </option>
                    { this.props.faculties.map((items, key) => (
                        <option key={key} value={key}> {items.name} </option>
                    ))}
                </select>
            </div>
        )
    }

    static propTypes = {
        faculties: PropTypes.array,
        selectedFaculty: PropTypes.string,
        updateField: PropTypes.func
    }
}

export default connect(
    state => ({
        faculties: state.faculties,
        selectedFaculty: state.formFields.faculty
    }),
    {updateField}
)(FacultySelect)
