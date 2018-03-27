import React, {Component} from 'react'
import PropTypes from 'prop-types'

class DayHeader extends Component {
    render() {
        return (
            <section className='hero is-info my-flexbox-child-title'>
                <h2 className='subtitle rotated'>
                    {this.props.title}
                </h2>
            </section>
        )
    }

    static propTypes = {
        title: PropTypes.string
    }
}

export default DayHeader
