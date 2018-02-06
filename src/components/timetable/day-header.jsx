import React, {Component} from 'react'
import PropTypes from 'prop-types'

const dayHeaderStyle = {
    padding: '1rem 1.5rem',
    textAlign: 'center'
}

class DayHeader extends Component {
    render() {
        return (
            <section className='hero is-info'>
                <div className='hero-body' style={dayHeaderStyle}>
                    <div className='container'>
                        <h2 className='subtitle'>
                            {this.props.title}
                        </h2>
                    </div>
                </div>
            </section>
        )
    }

    static propTypes = {
        title: PropTypes.string
    }
}

export default DayHeader
