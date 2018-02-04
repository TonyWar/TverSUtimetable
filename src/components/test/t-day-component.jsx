import React, {Component} from 'react'
import PropTypes from 'prop-types'
import 'bulma'

const cellHeaderStyle = {
    borderRight: '1px solid black',
    borderBottom: '1px solid black',
    borderCollapse: 'collapse',
    textAlign: 'center'
}

class TestDayComponent extends Component {
    render() {
        console.log(this.props.data)
        console.log(this.props.directions)
        return (
            <div>
                <section className='hero is-info'>
                    <div className='hero-body is-little'>
                        <div className='container'>
                            <h2 className='subtitle'>
                                {this.props.title}
                            </h2>
                        </div>
                    </div>
                </section>
                <table className='table'> 
                    <thead>
                        <tr> 
                            <th />
                            {this.props.directions.map((direction, key) => (
                                <th key={key}>
                                    <strong>{direction.name}</strong>
                                </th>
                            ))}
                        </tr>
                    </thead>
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

export default TestDayComponent

/*
<div className='columns' style={{marginTop: '0px'}}>
                    <div className='column' style={cellHeaderStyle} />
                    {this.props.directions.map((direction, key) => (
                        <div className='column' key={key} style={cellHeaderStyle}>
                            <strong>{direction.name}</strong>
                        </div>
                    ))}
                </div>
                <div>
                    <div className='columns'>
                        <div className='column'>
                            First column
                        </div>
                        <div className='column'>
                            Second column
                        </div>
                        <div className='column'>
                            Third column
                        </div>
                        <div className='column'>
                            Fourth column
                        </div>
                    </div>
                </div>
*/
