import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DaySingleLine from './day-single-line'

class DayLine extends Component {
    generateDirectionCells(lineIndex, direction, sum) {
        const arr = []
        for (let i = 0; i < this.props.colSpans[direction]; i++) {
            arr.push(<td key={sum + i}> строка {lineIndex} подстолбец {i} направление {direction} </td>)
        }
        return arr
    }

    generateLineCells(lineIndex) {
        const line = []
        let sum = 0
        this.props.data.forEach((item, i) => {
            if (i === 0) return
            line.push(...this.generateDirectionCells(lineIndex, i, sum))
            sum += this.props.colSpans[i]
        })
        return line
    }

    generateDataForLines(data, rowSpan) {
        const result = []
        for (let i = 0; i < rowSpan; i++) {
            const newData = []
            for (let j = 0; j < data.length; j++) {
                if (j === 0 && i === 0) {
                    newData.push(data[j])    
                } else if (data[j] === null) {
                    newData.push(null)
                } else if (data[j][0].subgroup === 0) {
                    newData.push(data[j][0])
                    data[j].splice(0, 1)
                    if (data[j].length === 0) {
                        data[j] = null
                    }
                } else if (data[j].length > 1 && data[j][0].subgroup === 2 && data[j][1].subgroup === 1) {
                    newData.push([data[j][1], data[j][0]])
                    data[j].splice(0, 2)
                    if (data[j].length === 0) {
                        data[j] = null
                    }
                } else if (data[j].length > 1 && data[j][0].subgroup === 1 && data[j][1].subgroup === 2) {
                    newData.push([data[j][0], data[j][1]])
                    data[j].splice(0, 2)
                    if (data[j].length === 0) {
                        data[j] = null
                    }
                } else if ((data[j].length > 1 && data[j][0].subgroup === 2 && data[j][1].subgroup !== 1) || (data[j].length === 1 && data[j][0].subgroup === 2)) {
                    newData.push([null, data[j][0]])
                    data[j].splice(0, 1)
                    if (data[j].length === 0) {
                        data[j] = null
                    }
                } else if ((data[j].length > 1 && data[j][0].subgroup === 1 && data[j][1].subgroup !== 2) || (data[j].length === 1 && data[j][0].subgroup === 1)) {
                    newData.push([data[j][0], null])
                    data[j].splice(0, 1)
                    if (data[j].length === 0) {
                        data[j] = null
                    }
                } else {
                    newData.push(null)
                }
            }
            result.push(newData)
        }
        return result
    }

    render() {
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

        const trArray = []
        // for (let i = 0; i < rowSpan; i++) {
        //     trArray.push(
        //         <tr key={i}>
        //             {i === 0 && <td rowSpan={rowSpan}> {this.props.data[0]} </td>}
        //             {this.generateLineCells(i)}
        //         </tr>
        //     )
        // }
        const data = []
        this.props.data.forEach((element, index) => {
            if (index === 0) {data.push(element)}
            else if (element === null) {data.push(null)}
            else data.push(element.lessons)
        })
        console.log('1 converted', data)
        const newData = this.generateDataForLines(data, rowSpan)
        for (let i = 0; i < rowSpan; i++) {
            trArray.push(
                <DaySingleLine
                    key = {i}
                    lineNumber = {i}
                    rowSpan = {rowSpan}
                    data = {newData}
                    colSpans = {this.props.colSpans}
                />
            )
        }
        return trArray
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
