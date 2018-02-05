import React, {Component} from 'react'
import Header from './header'
import { connect } from 'react-redux'
import {preloadPage} from '../../actions/preload'
import PropTypes from 'prop-types'

class PageComponent extends Component {
    componentDidMount() {
        this.props.preloadPage()
    }
    render() {
        return [
            <Header key={0} />
        ]
    }

    static propTypes = {
        preloadPage: PropTypes.func
    }
}

export default connect(
    null,
    {preloadPage}
)(PageComponent)
