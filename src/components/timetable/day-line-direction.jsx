import React, { Component } from 'react'
import PropTypes from 'prop-types'

const nullStyle = {
    borderBottom: 'none',
    borderTop: 'none'
}

// const firstNullStyle = {
//     borderBottom: 'none'
// }

// const lastNullStyle = {
//     borderTop: 'none'
// }

class DayLineDirection extends Component {
    render() {
        const {lineNumber, data, rowSpan, colSpans, directionNumber} = this.props
        // console.log('direction item', data)
        if (lineNumber === 0 && directionNumber === 0) {
            return (
                <td rowSpan={rowSpan} > { data[lineNumber][directionNumber] } </td>
            )
        }
        if (directionNumber === 0 && lineNumber !== 0) {return null}
        const currentItem = data[lineNumber][directionNumber]
        console.log('there is some item', data[0][directionNumber])
        if (data[0][directionNumber] && !currentItem) { return null }

        if (currentItem === null && lineNumber === 0 && data.length > 1) {
            return (<td colSpan={colSpans[directionNumber]}  rowSpan={rowSpan} />)
        }
        // if (currentItem === null && lineNumber === data.length - 1) {
        //     return (<td colSpan={colSpans[directionNumber]} style={lastNullStyle} />)
        // }
        if (currentItem === null && lineNumber === 0) {
            return (<td colSpan={colSpans[directionNumber]} rowSpan={rowSpan} />)
        }
        if (currentItem === null && lineNumber !== 0) {
            return null // (<td colSpan={colSpans[directionNumber]} > Удалить </td>)
        }
        // if (currentItem === null) {
        //     return (<td colSpan={colSpans[directionNumber]} />)
        // }
        if (currentItem.constructor === Array) {
            return currentItem.map((item, key) => (
                item ?
                    <td key={key} rowSpan={item.rowSpan} >
                        {currentItem[key].subject && <p>{currentItem[key].subject.name}</p>}
                        {currentItem[key].teacher && <p>{currentItem[key].teacher.fio}</p>}
                        {currentItem[key].auditory && <p> аудитория: {currentItem[key].auditory.name} корпус: {currentItem[key].auditory.housing}</p>}
                        {currentItem[key].plus_minus !== '' && <p>{currentItem[key].plus_minus}</p>}
                    </td>
                    : <td key={key} style={nullStyle} />
            ))
        }
        // console.log('Element', currentItem.colSpan, currentItem.rowSpan, currentItem)
        if (currentItem.constructor === Object) {
            if (currentItem.colSpan === 0) { return null }
            return <td colSpan={currentItem.colSpan} rowSpan={currentItem.rowSpan} >
                {currentItem.subject && <p>{currentItem.subject.name}</p>}
                {currentItem.teacher && <p>{currentItem.teacher.fio}</p>}
                {currentItem.auditory && <p> аудитория: {currentItem.auditory.name} корпус: {currentItem.auditory.housing}</p>}
                {currentItem.plus_minus !== '' && <p>{currentItem.plus_minus}</p>}
            </td>
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
