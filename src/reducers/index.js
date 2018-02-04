import { combineReducers } from 'redux'
import faculties from './faculties'
import semesters from './semesters'
import formFields from './form-fields'
import courses from './courses'
import timetable from './timetable'
import directions from './directions'

const rootReducer = combineReducers({
    faculties,
    semesters,
    formFields,
    courses,
    timetable,
    directions
})

export default rootReducer