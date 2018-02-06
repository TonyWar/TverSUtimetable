import React, {Component} from 'react'
import PropTypes from 'prop-types'

class DayItem extends Component {
    render() {
        // console.log(this.props.data)
        const {data, line, row, maxColSpan, maxRowSpan} = this.props
        if (row === 0
            // || (!data && line > 0)
        ) 
            return null
        if (!data) return <td > Нет предметов </td>
        // для разминки пишем для конкретного количества предметов
        // if (data.lessons.length === 1) {
        //     const concreteLesson = data.lessons[0]
        //     if (concreteLesson.subgroup === 0 && line === 0) {
        //         return <td colSpan={maxColSpan} rowSpan={maxRowSpan} > 
        //             {concreteLesson.subject && <p> {concreteLesson.subject.name} </p>}
        //             {concreteLesson.teacher && <p> {concreteLesson.teacher.fio} </p>}
        //             {concreteLesson.auditory && <p> {concreteLesson.auditory.name} </p>}  
        //             {concreteLesson.plus_minus !== '' && <p> {concreteLesson.plus_minus} </p>} 
        //         </td>
        //     } else if (concreteLesson.subgroup === 0 && line > 0) { return null }
        // }

        return (
            <td > Есть предметы </td>
        )
    }

    static propTypes = {
        data: PropTypes.any,
        maxColSpan: PropTypes.number,
        maxRowSpan: PropTypes.number,
        line: PropTypes.number,
        row: PropTypes.number
    }
}

export default DayItem
