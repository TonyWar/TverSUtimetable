import React, {Component} from 'react'
import '../../resources/styl/style.styl'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {changeField, initTimetable} from '../../actions/form-actions'
import TestWeekComponent from './t-week-component'

class TestPageComponent extends Component {
    constructor(props) {
        super(props)
        this.levels = [
            'Бакалавриат',
            'Магистратура',
            'Аспирантура'
        ]
    }

    handleChangeFaculty = e => {
        if (e.target.value === '-1') return
        this.props.changeField('faculty', e.target.value)
        // Делаем запрос по факультету - обновляем данные
    }

    handleChangeSemester = e => {
        if (e.target.value === '-1') return
        this.props.changeField('semester', e.target.value)
        // Делаем запрос по факультету и семестру
    }

    handleChangeLevel = e => {
        this.props.changeField('level', e.target.value)
        // факультет, семестр, уровени
    }

    handleChangeCourse = e => {
        this.props.changeField('course', e.target.value)
        // полный запрос
    }

    componentDidMount() {
        this.props.initTimetable()
    }

    render() {
        return (
            <div>
                <header className='header'>
                    <div/>
                    <div>
                        <div className='header-logo' />
                        <div className='select'>
                            <select value={this.props.fields.faculty} onChange={this.handleChangeFaculty}>
                                <option value='-1'> Выберите факультет </option>
                                { this.props.faculties.map((items, key) => (
                                    <option key={key} value={key}> {items.name} </option>
                                ))}
                            </select>
                        </div>
                        <div className='select'>
                            <select value={this.props.fields.semester} onChange={this.handleChangeSemester}>
                                <option value='-1'> Выберите семестр </option>
                                { this.props.semesters.map((item, key) => (
                                    <option key={key} value={key}> {item.year + ' ' + item.semester} </option>
                                ))}
                            </select>
                        </div>
                        <div className='select'>
                            <select value={this.props.fields.level} onChange={this.handleChangeLevel}>
                                { this.levels.map((level, key) => (
                                    <option key={key} value={key}>{level}</option>
                                ))}
                            </select>
                        </div>
                        <div className='select'>
                            <select value={this.props.fields.cource} onChange={this.handleChangeCourse}>
                                { this.props.courses.map((course, key) => (
                                    <option key={key} value={key}>{course}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div/>
                </header>
                <TestWeekComponent/>
            </div>
        )
    }
    static propTypes = {
        faculties: PropTypes.array,
        semesters: PropTypes.array,
        fields: PropTypes.object,
        courses: PropTypes.array,
        changeField: PropTypes.func,
        initTimetable: PropTypes.func
    }
}

export default connect(
    state => ({
        faculties: state.faculties,
        semesters: state.semesters,
        fields: state.formFields,
        courses: state.courses
    }),
    {changeField, initTimetable}
)(TestPageComponent)
