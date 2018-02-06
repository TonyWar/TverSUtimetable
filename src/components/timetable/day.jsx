import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DayHeader from './day-header'

const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '6rem auto',
    gridTemplateRows: '3rem'
}

class DayTimetable extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.directions)
        console.log(this.props.data)
        const subContainerStyle = {
            display: 'grid',
            gridTemplateColumns: 'repeat(' + this.props.directions.length + ', auto)',
            gridTemplateRows: '3rem',
            textAlign: 'center'
        }
        return (
            <div>
                <DayHeader title={this.props.title} />
                <div style={containerStyle}>
                    <div/>
                    <div style={subContainerStyle}> 
                        {this.props.directions.map((direction, key) => (
                            <div>{direction.name}</div>
                        ))}
                    </div>
                </div>
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
