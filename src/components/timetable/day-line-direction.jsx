import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TableCell from './table-cell'

const nullStyle = {
    borderBottom: 'none',
    borderTop: 'none'
}


class DayLineDirection extends Component {
    render() {
        const {lineNumber, data, rowSpan, colSpans, directionNumber} = this.props
        if (lineNumber === 0 && directionNumber === 0) {
            return (
                <td rowSpan={rowSpan} > { data[lineNumber][directionNumber] } </td>
            )
        }
        if (directionNumber === 0 && lineNumber !== 0) {return null}
        const currentItem = data[lineNumber][directionNumber]
        if (data[0][directionNumber] && !currentItem) { return null }

        if (currentItem === null && lineNumber === 0 && data.length > 1) {
            return (<td colSpan={colSpans[directionNumber]}  rowSpan={rowSpan} />)
        }

        if (currentItem === null && lineNumber === 0) {
            return (<td colSpan={colSpans[directionNumber]} rowSpan={rowSpan} />)
        }
        if (currentItem === null && lineNumber !== 0) {
            return null // (<td colSpan={colSpans[directionNumber]} > Удалить </td>)
        }

        if (currentItem.constructor === Array) {
            return currentItem.map((item, key) => (
                item ?
                    <TableCell 
                        data = {currentItem[key]}
                        rowSpan = {item.rowSpan}
                        key = {key}
                    />
                    : <td key={key} style={nullStyle} />
            ))
        }

        if (currentItem.constructor === Object) {
            if (currentItem.colSpan === 0) { return null }
            return <TableCell 
                data = {currentItem}
                rowSpan = {currentItem.rowSpan}
                colSpan={currentItem.colSpan}
            />
        }

        return (
            <td> Неизвестный доселе случай </td>
        )
    }

    static propTypes = {
        data: PropTypes.array,
        lineNumber: PropTypes.number,
        rowSpan: PropTypes.number,
        colSpans: PropTypes.array,
        directionNumber: PropTypes.number
    }
}

export default DayLineDirection
