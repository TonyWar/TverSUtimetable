import React, {Component} from 'react'

import FacultySelect from '../selectors/faculty-select'
import SemesterSelect from '../selectors/semester-select'
import LevelSelect from '../selectors/level-select'
import CourseSelect from '../selectors/course-select'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuIsActive: false
        }
    }
    render() {
        return (
            <div className='hero' style={{ position: 'fixed',
                backgroundColor: 'white',
                color: 'black',
                width: '100%', top: '0'}}> 
                <div className='hero-head'> 
                    <nav className='navbar'>
                        <div className='container'>
                            <div className='navbar-brand'>
                                <a className='navbar-item'>
                                    <h1> ТвГУ </h1>
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
}

export default Header
