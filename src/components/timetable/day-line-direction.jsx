import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DayLineDirection extends Component {
    render() {
        const {lineNumber, data, rowSpan, colSpans, directionNumber} = this.props
        console.log('direction item', data)
        if (lineNumber === 0 && directionNumber === 0) {
            return (
                <td rowSpan={rowSpan} > { data[lineNumber][directionNumber] } </td>
            )
        }
        if (directionNumber === 0 && lineNumber !== 0) {return null}
        const currentItem = data[lineNumber][directionNumber]
        console.log('AAAAA', typeof(currentItem), currentItem)
        if (currentItem === null) {
            return (<td colSpan={colSpans[directionNumber]} />)
        }
        if (currentItem.constructor === Object) {
            return <td colSpan={colSpans[directionNumber]}>
                {currentItem.subject && <p>{currentItem.subject.name}</p>}
                {currentItem.teacher && <p>{currentItem.teacher.fio}</p>}
                {currentItem.auditory && <p>{currentItem.auditory.name}</p>}
                {currentItem.plus_minus !== '' && <p>{currentItem.plus_minus}</p>}
            </td>
        }
        if (currentItem.constructor === Array) {
            return currentItem.map((item, key) => (
                item ?
                    <td key={key}>
                        {currentItem[key].subject && <p>{currentItem[key].subject.name}</p>}
                        {currentItem[key].teacher && <p>{currentItem[key].teacher.fio}</p>}
                        {currentItem[key].auditory && <p>{currentItem[key].auditory.name}</p>}
                        {currentItem[key].plus_minus !== '' && <p>{currentItem[key].plus_minus}</p>}
                    </td>
                    : <td key={key}/>
            ))
        }
        return (
            <td> Тяжело </td>
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
