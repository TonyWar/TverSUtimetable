import { combineReducers } from 'redux'
import faculties from './faculties'
import semesters from './semesters'
import formFields from './form-fields'
import courses from './courses'
import timetable from './timetable'
import directions from './directions'
import levels from './levels'

const rootReducer = combineReducers({
    faculties,
    semesters,
    levels,
    courses,
    formFields,
    timetable,
    directions
})

export default rootReducer
