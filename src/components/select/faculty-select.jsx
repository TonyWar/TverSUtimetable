import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class FacultySelect extends Component {
    handleChange = e => {
        if (e.target.value === '-1') return
        console.log('Выбранный факультет:', e.target.value)
    }

    render() {
        return (
            <select defaultChecked='-1' onChange={this.handleChange}>
                <option value='-1'> Выберите факультет </option>
                { this.props.faculties.map((faculty, key) => (
                    <option key={key} value={faculty._id}> {faculty.name} </option>
                ))}
            </select>
        )
    }

    static propTypes = {
        faculties: PropTypes.array
    }
}

export default connect(
    state => ({
        faculties: state.faculties
    }),
    null
)(FacultySelect)
