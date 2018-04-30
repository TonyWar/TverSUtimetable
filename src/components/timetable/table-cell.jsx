import React, {Component} from 'react'
import PropTypes from 'prop-types'

import '../../resources/styl/table-cell.styl'

class TableCell extends Component {
    render() {
        // расписание на обе недели совпадает
        if (this.props.data.plus_minus === '') {
            return (
                <td 
                    rowSpan={this.props.rowSpan} 
                    colSpan={this.props.colSpan} 
                    className='cell '
                >
                    {this.props.data.plus_minus !== '' && <p className='plus-minus' >{this.props.data.plus_minus}</p>}
                    {this.props.data.subject && <p className='subject' >{this.props.data.subject.name}</p>}
                    {this.props.data.teacher && <p>{this.props.data.teacher.fio}</p>}
                    {this.props.data.auditory && <p className='position'> &#160;{this.props.data.auditory.name} (корп.&#160;{this.props.data.auditory.housing})</p>}
                </td>
            )
        }

        let weekClass = 'week'
        if (this.props.data.plus_minus === '+') {weekClass += ' plus'}
        if (this.props.data.plus_minus === '-') {weekClass += ' minus'}

        return (
            <td 
                rowSpan={this.props.rowSpan} 
                colSpan={this.props.colSpan} 
                className='cell '
            >
                <div className='data-container horizontal-and-vertical-centering '> 
                    <div className='plus-minus' > <div className={weekClass}> {this.props.data.plus_minus} </div> </div>
                    <div className='data' style={{paddingRight: '5px'}}>
                        {this.props.data.subject && <p className='subject' >{this.props.data.subject.name}</p>}
                        {this.props.data.teacher && <p>{this.props.data.teacher.fio}</p>}
                        {this.props.data.auditory && <p className='position'> &#160;{this.props.data.auditory.name } (корп.&#160;{this.props.data.auditory.housing})</p>}
                    </div>
                </div> 
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
