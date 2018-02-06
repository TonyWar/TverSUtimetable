import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DayItem from './day-item'

class DayLine extends Component {
    render() {
        // console.log('line', this.props.data)
        let rowSpan = 1
        this.props.data.forEach((element, index) => {
            if (index > 0) {
                if (element) {
                    const lessons = element.lessons
                    let count0 = 0
                    let count1 = 0
                    lessons.forEach(lesson => {
                        if (lesson.subgroup === 0 || lesson.subgroup === 1) {count0++}
                        if (lesson.subgroup === 0 || lesson.subgroup === 2) {count1++}
                    })
                    if (count0 > rowSpan) {rowSpan = count0}
                    if (count1 > rowSpan) {rowSpan = count1}
                }
            }
        })
        // console.log('rowSpan', rowSpan)
        const trArray = []
        for (let i = 0; i < rowSpan; i++) {
            trArray.push(i)
        }
        // console.log(trArray)
        // console.log('line', this.props.data)
        // console.log('subcolspan', this.props.colSpans)
        return (
            trArray.map((tramp, key) => (
                <tr key={key}>
                    {key === 0 && <td rowSpan={rowSpan}> {this.props.data[0]} </td>}
                    {this.props.data.map((item, index) => (
                        index > 0 &&
                        <DayItem
                            data = {item}
                            maxColSpan = {this.props.colSpans[index]}
                            maxRowSpan = {rowSpan}
                            key={index}
                            line={key}
                            row={index}
                        />
                    ))}
                </tr>
            ))
        )
    }

    /*
    {this.props.data.map((item, index) => (
                        key === 0 && index > 0 && !item && <td colSpan={this.props.colSpans[index]} key={index}> Нет предметов </td>
                    ))}
                    {this.props.data.map((item, index) => (
                        index > 0 && item && <td colSpan={this.props.colSpans[index]} key={index}> Есть предметы </td>
                    ))}
    <tr>
                {this.props.data.map((item, key) => (
                    key === 0 ? <td key={key}> {item} </td>
                        : item ? 
                            null 
                        : <td colSpan={this.props.colSpans[key]} key={key}> Нет предметов </td>
                ))}
            </tr>
    */

    static propTypes = {
        data: PropTypes.array,
        colSpans: PropTypes.array
    }
}

export default DayLine
