import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getFaculties } from '../../actions/faculties-actions'
import PropTypes from 'prop-types'
import FacultySelect from '../select/faculty-select'

class PageHeader extends Component {
    componentDidMount() {
        this.props.getFaculties()
    }

    render() {
        return (
            <div>
                <h1> Header </h1>
                <div>
                    <h2> Факультет </h2>
                    <FacultySelect/>
                </div>
            </div>
        )
    }

    static propTypes = {
        getFaculties: PropTypes.func,
        faculties: PropTypes.array
    }
}

export default connect(
    null,
    {getFaculties}
)(PageHeader)
