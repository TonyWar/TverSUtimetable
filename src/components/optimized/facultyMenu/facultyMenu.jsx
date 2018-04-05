import React, {PureComponent} from 'react'

import './menu-stylus.styl'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { changeField } from '../../../actions/form-actions'
import { loadFaculties } from '../../../actions/load-actions'
import { Link } from 'react-router-dom'

class FacultiesPage extends PureComponent {
    componentDidMount() {
        if (this.props.faculties.length === 0) {
            this.props.loadFaculties()
        }
    }

    render() {
        return (
            <div className='faculties-menu-page' >
                <div className='container grid grid__section'>
                    {
                        this.props.faculties.map((faculty, index) => (
                            <Link className='grid__section__item' 
                                key={index}
                                to={'/' + faculty.abbr}    
                            > 
                                <div> { faculty.name } </div> 
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    }

    static propTypes = {
        faculties: PropTypes.array,
        changeField: PropTypes.func,
        loadFaculties: PropTypes.func
    }
}

export default connect(
    state => ({
        faculties: state.faculties
    }),
    { changeField, loadFaculties }
)(FacultiesPage)
