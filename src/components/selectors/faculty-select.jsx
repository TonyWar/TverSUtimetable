import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class FacultySelect extends Component {
    handleChangeFaculty = e => {
        if (e.target.value === '-1') return
        console.log('Выбран факультет: ', this.props.faculties[e.target.value])
        // this.props.changeField('faculty', e.target.value)
        // this.props.clearTimetable()
        // this.props.getTimetableOfFaculty(this.props.faculties[e.target.value]._id)
    }
    render() {
        return (
            <div className='navbar-item' >
                <select className='select' value={this.props.selectedFaculty} onChange={this.handleChangeFaculty} >
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
        selectedFaculty: PropTypes.string
    }
}

export default connect(
    state => ({
        faculties: state.faculties,
        selectedFaculty: state.formFields.faculty
    })
)(FacultySelect)
