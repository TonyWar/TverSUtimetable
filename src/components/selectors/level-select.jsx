import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {changeField} from '../../actions/form-actions'

class LevelSelect extends Component {
    handleChangeLevel = e => {
        this.props.changeField('level', e.target.value, {
            ID: this.props.faculties[this.props.fields.faculty]._id,
            year: this.props.semesters[this.props.fields.semester].year,
            semester: this.props.semesters[this.props.fields.semester].semester,
            level: this.props.levels[e.target.value]
        })
    }
    render() {
        if (this.props.levels.length === 0) { return null }
        return (
            <div className='navbar-item' value={this.props.fields.level} onChange={this.handleChangeLevel}>
                <select className='select' >
                    { this.props.levels.map((level, key) => (
                        <option key={key} value={key + ''} > {level} </option>
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
        levels: PropTypes.array
    }
}

export default connect(
    state => ({
        faculties: state.faculties,
        semesters: state.semesters,
        levels: state.levels,
        fields: state.formFields
    }),
    { changeField }
)(LevelSelect)
