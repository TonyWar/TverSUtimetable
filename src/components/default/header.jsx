import React, {Component} from 'react'

import FacultySelect from '../selectors/faculty-select'
import SemesterSelect from '../selectors/semester-select'
import LevelSelect from '../selectors/level-select'
import CourseSelect from '../selectors/course-select'

import '../../resources/css/main.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuIsActive: false
        }
    }
    render() {
        const colSpans = [1]
        this.props.directions.forEach(element => {
            colSpans.push(1)    
        })

        const crutch = []
        for (let i = 1; i < colSpans.length; i++) {
            for (let j = 0; j < colSpans[i]; j++) {
                crutch.push(colSpans[i])
            }
        }
        return (
            <div className='hero' style={{ position: 'fixed',
                backgroundColor: 'white',
                color: 'black',
                width: '100%', top: '0', height: '55px', zIndex: '50'}}> 
                <div className='hero-head'> 
                    <nav className='navbar'>
                        <div className='container'>
                            <div className='navbar-brand'>
                                <a className='navbar-item'>
                                    <div className='site-logo'/>
                                </a>
                                <span className={'navbar-burger burger' + (this.state.menuIsActive ? ' is-active' : '')} data-target='navbarMenuHeroA' onClick={()=> this.setState({menuIsActive: !this.state.menuIsActive})}>
                                    <span />
                                    <span />
                                    <span />
                                </span>
                            </div>
                            <div id='navbarMenuHeroA' className={'navbar-menu' + (this.state.menuIsActive ? ' is-active' : '')}>
                                <div className='navbar-end'>
                                    <FacultySelect/>
                                    <SemesterSelect/>
                                    <LevelSelect/>
                                    <CourseSelect/>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }

    static propTypes = {
        timetable: PropTypes.object,
        directions: PropTypes.array
    }
}
export default connect(
    state => ({
        timetable: state.timetable,
        directions: state.directions
    })
)(Header)
