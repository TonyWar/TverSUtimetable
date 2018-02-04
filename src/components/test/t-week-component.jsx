import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TestDayComponent from './t-day-component'

class TestWeekComponent extends Component {
    render() {
        const weekList = []
        for (const key in this.props.timetable) {
            weekList.push(key)
        }
        return (
            <div>
                {weekList.map((day, key)=>(
                    <TestDayComponent key={key} title={day} data={this.props.timetable[day]} directions={this.props.directions} />
                ))}
            </div>
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
)(TestWeekComponent)
