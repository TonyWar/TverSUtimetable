import React, {Component} from 'react'
import DayTimetable from '../timetable/day'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class TimeTable extends Component {
    render() {
        const week = []
        for (const key in this.props.timetable) {
            week.push(key)
        }

        return (
            week.map((day, key) => (
                <DayTimetable
                    title = {day}
                    key = {key}
                    data = {this.props.timetable[day]}
                    directions = {this.props.directions}
                />
            ))
        )
    }
    static propTypes = {
        timetable: PropTypes.object,
        directions: PropTypes.array
    }
}

export default connect(
    state => ({
        timetable: state.timetable,
        directions: state.directions
    })
)(TimeTable)
