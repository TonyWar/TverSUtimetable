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
                // let itemRowSpan = rowSpan
                // console.log('itemRowSpan', itemRowSpan)
                if (j === 0 && i === 0) {
                    // Ячейка времени
                    newData.push(data[j])    
                } else if (data[j] === null || data[j].length === 0) {
                    // Пустая ячейка
                    newData.push(null)
                } else if (data[j][0].subgroup === 0) {
                    // if (data[j].length === 1) {
                    //     data[j][0].rowSpan = itemRowSpan
                    //     if (data[j][0].subject)
                    //         console.log('broken item', data[j][0].subject.name, itemRowSpan)
                    // }
                    // itemRowSpan--
                    // if (data[j].length === 1) {
                    //     data[j][0].rowSpan = rowSpan - newData.length + 1
                    //     debugger
                    // }
                    newData.push(data[j][0])
                    data[j].splice(0, 1)
                    if (data[j].length === 0) {
                        data[j] = null
                    }
                } else if (data[j].length > 1 && data[j][0].subgroup === 2 && data[j][1].subgroup === 1) {
                    // if (data[j].length === 2) {
                    //     data[j][0].rowSpan = itemRowSpan
                    //     data[j][1].rowSpan = itemRowSpan
                    // }
                    // itemRowSpan -= 2
                    newData.push([data[j][1], data[j][0]])
                    data[j].splice(0, 2)
                    if (data[j].length === 0) {
                        data[j] = null
                    }
                } else if (data[j].length > 1 && data[j][0].subgroup === 1 && data[j][1].subgroup === 2) {
                    // if (data[j].length === 2) {
                    //     data[j][0].rowSpan = itemRowSpan
                    //     data[j][1].rowSpan = itemRowSpan
                    // }
                    // itemRowSpan -= 2
                    newData.push([data[j][0], data[j][1]])
                    data[j].splice(0, 2)
                    if (data[j].length === 0) {
                        data[j] = null
                    }
                } else if ((data[j].length > 1 && data[j][0].subgroup === 2 && data[j][1].subgroup !== 1) || (data[j].length === 1 && data[j][0].subgroup === 2)) {
                    // if (data[j].length === 1) {
                    //     data[j][0].rowSpan = itemRowSpan
                    // }
                    // itemRowSpan -= 1
                    newData.push([null, data[j][0]])
                    data[j].splice(0, 1)
                    if (data[j].length === 0) {
                        data[j] = null
                    }
                } else if ((data[j].length > 1 && data[j][0].subgroup === 1 && data[j][1].subgroup !== 2) || (data[j].length === 1 && data[j][0].subgroup === 1)) {
                    // if (data[j].length === 1) {
                    //     data[j][0].rowSpan = itemRowSpan
                    // }
                    // itemRowSpan -= 1
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
        // console.log('result ', result)
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result[i].length; j++) {
                if (i === 0 && j === 0) { continue }
                if (result[i + 1] && result[i][j] && !result[i + 1][j]) {
                    // console.log(result[i][j], result[i + 1][j], i)
                    if (result[i][j].constructor === Array) {
                        result[i][j].forEach(element => {
                            if (element)
                                element.rowSpan = rowSpan - i
                        })
                    } else {
                        result[i][j].rowSpan = rowSpan - i
                    }
                }
            }
        }
        return result
    }

    render() {
        let rowSpan = 1
        this.props.data.forEach((element, index) => {
            if (index > 0) {
                if (element) {
                    // console.log(element.lessons)
                    const lessons = element.lessons
                    let count0 = 0
                    let count1 = 0
                    lessons.forEach(lesson => {
                        if (lesson.subgroup === 0 || lesson.subgroup === 1) {count0++}
                        if (lesson.subgroup === 0 || lesson.subgroup === 2) {count1++}
                    })
                    if (count0 > rowSpan) {rowSpan = count0}
                    if (count1 > rowSpan) {rowSpan = count1}
                    // ВМЕСТО ЭТОГО КОДА У АДМИНА ДОЛЖЕН БЫТЬ МОЗГ
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
            else {
                const lessons = []
                element.lessons.forEach((lesson, lessonIndex) => {
                    lesson.rowSpan = 1
                    lesson.colSpan = 1
                    lessons.push(lesson)
                    // console.log('lesson for check', lesson)
                    // устанока colSpan
                    // if (lesson && lesson.subject && lesson.subject.name === 'Введение в специальность')
                    //     console.log('сравнение предметов', lesson, this.props.data[index])
                    if (lesson.subgroup === 0) {
                        lesson.colSpan = this.props.colSpans[index]
                        // если слева есть такой же предмет, то colSpan = 0
                        if (this.props.data[index - 1] && this.props.data[index - 1].lessons) {
                            this.props.data[index - 1].lessons.forEach(tlesson => {
                                // console.log('например ', tlesson)
                                if ( 
                                    (tlesson.auditory && lesson.auditory && lesson.auditory._id === tlesson.auditory._id || (!tlesson.auditory && !lesson.auditory))
                                    && (tlesson.subject && lesson.subject && tlesson.subject._id === lesson.subject._id || (!tlesson.subject && !lesson.subject))
                                    && (tlesson.teacher && lesson.teacher && tlesson.teacher._id === lesson.teacher._id || (!tlesson.teacher && !lesson.teacher))
                                    && (tlesson.subgroup === lesson.subgroup)
                                    && (tlesson.plus_minus === lesson.plus_minus)
                                ) {
                                    // слева есть такой же предмет, значит здесть colspan = 0
                                    lesson.colSpan = 0
                                }
                            })
                        }
                        if (lesson.colSpan !== 0) {
                            // добавляем ширину за счёт элементов справа
                            for (let hardIndex = index + 1; hardIndex < this.props.data.length; hardIndex++) {
                                // console.log(this.props.data[hardIndex], this.props.data[hardIndex])
                                if (!this.props.data[hardIndex] || this.props.data[hardIndex].lessons.length === 0) break
                                for (let i = 0; i < this.props.data[hardIndex].lessons.length; i++) {
                                    const tlesson = this.props.data[hardIndex].lessons[i]
                                    if (
                                        (tlesson.auditory && lesson.auditory && lesson.auditory._id === tlesson.auditory._id || (!tlesson.auditory && !lesson.auditory))
                                        && (tlesson.subject && lesson.subject && tlesson.subject._id === lesson.subject._id || (!tlesson.subject && !lesson.subject))
                                        && (tlesson.teacher && lesson.teacher && tlesson.teacher._id === lesson.teacher._id || (!tlesson.teacher && !lesson.teacher))
                                        && (tlesson.subgroup === lesson.subgroup)
                                        && (tlesson.plus_minus === lesson.plus_minus)
                                    ) {
                                        // слева есть такой же предмет, значит здесть colspan ++
                                        lesson.colSpan += this.props.colSpans[hardIndex]
                                    } else {
                                        break
                                    }
                                }
                                /*
                                this.props.data[hardIndex].lessons.forEach(tlesson => {
                                    // console.log('например ', tlesson)
                                    if ( 
                                        (tlesson.auditory && lesson.auditory && lesson.auditory._id === tlesson.auditory._id || (!tlesson.auditory && !lesson.auditory))
                                        && (tlesson.subject && lesson.subject && tlesson.subject._id === lesson.subject._id || (!tlesson.subject && !lesson.subject))
                                        && (tlesson.teacher && lesson.teacher && tlesson.teacher._id === lesson.teacher._id || (!tlesson.teacher && !lesson.teacher))
                                        && (tlesson.subgroup === lesson.subgroup)
                                        && (tlesson.plus_minus === lesson.plus_minus)
                                    ) {
                                        // слева есть такой же предмет, значит здесть colspan ++
                                        lesson.colSpan += this.props.colSpans[hardIndex]
                                    }
                                })
                                */
                            }
                        }
                    }
                }) 
                lessons.sort((a, b) => {
                    if (a.colSpan === b.colSpan) return 0
                    if (a.colSpan === 0) return -1
                    if (b.colSpan === 0) return 1
                    if (a.colSpan > this.props.colSpans[index]) return -1
                    if (b.colSpan > this.props.colSpans[index]) return 1
                    return 0
                })
                data.push(lessons) 
            }
        })

        // console.log('1 converted', data)
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
