import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {changeField} from '../../actions/form-actions'

import { findCurrentFaculty } from '../../constants/functions'

class LevelSelect extends Component {
    handleChangeLevel = e => {
        this.props.changeField('level', this.props.levels[e.target.value], {
            ID: findCurrentFaculty(this.props.fields.faculty, this.props.faculties)._id,
            year: this.props.semesters[this.props.fields.semester].year,
            semester: this.props.semesters[this.props.fields.semester].semester,
            level: this.props.levels[e.target.value]
        })
    }

    indexOfCurrentLevel = () => {
        return this.props.levels.indexOf(this.props.fields.level)
    }

    render() {
        if (this.props.levels.length === 0) { return null }
        const selectedField = this.indexOfCurrentLevel()
        return (
            <div className='navbar-item' value={selectedField} onChange={this.handleChangeLevel}>
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
