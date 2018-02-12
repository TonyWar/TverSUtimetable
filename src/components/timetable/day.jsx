import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DayHeader from './day-header'
import DayLine from './day-line'

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

        return (
            <div>
                <DayHeader title={this.props.title} />
                <table className='table is-bordered is-fullwidth'> 
                    <thead>
                        <tr>
                            <th />
                            {this.props.directions.map((direction, key) => (
                                <th key={key} colSpan={colSpans[key + 1]}> {direction.name} </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{height: '0px'}} >
                            <td style={{width: '10%', height: '0px', padding: '0'}} />
                            {
                                crutch.map((item, key) => (
                                    (key > 0 && item === 1) ? <td style={{width: (90 / (colSpans.length - 1) / item) + '%', height: '0px', padding: '0'}} />
                                        : <td style={{width: (90 / (colSpans.length - 1) / item) + '%', height: '0px', padding: '0'}} />
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
            </div>
        )
    }

    static propTypes = {
        title: PropTypes.string,
        data: PropTypes.array,
        directions: PropTypes.array
    }
}

export default DayTimetable
