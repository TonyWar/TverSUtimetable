import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DayHeader from './day-header'

class DayTimetable extends Component {
    render() {
        return (
            <div>
                <DayHeader title={this.props.title} />
            </div>
        )
    }

    static propTypes = {
        title: PropTypes.string
    }
}

export default DayTimetable
