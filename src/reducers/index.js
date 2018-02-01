import { combineReducers } from 'redux'
import faculties from './faculties'
import semesters from './semesters'

const rootReducer = combineReducers({
    faculties,
    semesters
})

export default rootReducer