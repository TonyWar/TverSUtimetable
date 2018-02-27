import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TableCell extends Component {
    render() {
        return (
            <td rowSpan={this.props.rowSpan} colSpan={this.props.colSpan}>
                {this.props.data.subject && <p>{this.props.data.subject.name}</p>}
                {this.props.data.teacher && <p>{this.props.data.teacher.fio}</p>}
                {this.props.data.auditory && <p> аудитория: {this.props.data.auditory.name} корпус: {this.props.data.auditory.housing}</p>}
                {this.props.data.plus_minus !== '' && <p>{this.props.data.plus_minus}</p>}
            </td>
        )
    }

    static propTypes = {
        data: PropTypes.object,
        rowSpan: PropTypes.number,
        colSpan: PropTypes.number
    }

    static defaultProps = {
        colSpan: 1,
        rowSpan: 1
    }
}

export default TableCell
