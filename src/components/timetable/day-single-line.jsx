import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DayLineDirection from './day-line-direction'

class DaySingleLine extends Component {
    render() {
        const {lineNumber, rowSpan, data, colSpans} = this.props
        return (
            <tr>
                {data[lineNumber].map((item, key) => (
                    <DayLineDirection
                        key = {key}
                        data = {data}
                        lineNumber = {lineNumber}
                        rowSpan = {rowSpan}
                        colSpans = {colSpans}
                        directionNumber = {key}
                    />
                ))}
            </tr>
        )
    }

    static propTypes = {
        lineNumber: PropTypes.number,
        rowSpan: PropTypes.number,
        data: PropTypes.array,
        colSpans: PropTypes.array
    }
}

export default DaySingleLine
