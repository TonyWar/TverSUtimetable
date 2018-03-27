import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DayHeader from './day-header'
import DayLine from './day-line'
import '../../resources/styl/style.styl'

class DayTimetable extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const colSpans = [1]
        this.props.directions.forEach(element => {
            colSpans.push(1)    
        })

        this.props.data.forEach(line => {
            if (!line) return
            for (let index = 1; index <= this.props.directions.length; index++) {
                line[index] && line[index].lessons.forEach(lesson => {
                    if (lesson.subgroup === 1 || lesson.subgroup === 2) {
                        colSpans[index] = 2
                    }
                    if (lesson.subgroup > 2 && lesson.subgroup > colSpans[index]) {
                        colSpans[index] = lesson.subgroup   
                    }
                })
            }
        })

        const crutch = []
        for (let i = 1; i < colSpans.length; i++) {
            for (let j = 0; j < colSpans[i]; j++) {
                crutch.push(colSpans[i])
            }
        }

        return [
            <div key={0} className='my-flex-container'>
                <DayHeader title={this.props.title} />
                <table className='table is-bordered is-fullwidth my-flexbox-child-table'> 
                    <thead>
                        <tr>
                            <th />
                            {this.props.directions.map((direction, key) => (
                                <th key={key} colSpan={colSpans[key + 1]} style={{textAlign: 'center'}} > {direction.name} </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{height: '0px'}} >
                            <td style={{width: '7%', height: '0px', padding: '0'}} />
                            {
                                crutch.map((item, key) => (
                                    (key > 0 && item === 1) ? <td key={key} style={{width: (93 / (colSpans.length - 1) / item) + '%', height: '0px', padding: '0'}} />
                                        : <td key={key} style={{width: (93 / (colSpans.length - 1) / item) + '%', height: '0px', padding: '0'}} />
                                ))
                            }    
                        </tr>
                        {this.props.data.map((line, key) => (
                            <DayLine
                                data = {line}
                                key = {key}
                                colSpans = {colSpans}
                            />
                        ))}
                    </tbody>
                </table>
            </div>,
            <div className='bottom-line' key={1}/>
        ]
    }

    static propTypes = {
        title: PropTypes.string,
        data: PropTypes.array,
        directions: PropTypes.array
    }
}

export default DayTimetable
