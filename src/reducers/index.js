import { combineReducers } from 'redux'
import faculties from './faculties'
import semesters from './semesters'
import formFields from './form-fields'

const rootReducer = combineReducers({
    faculties,
    semesters,
    formFields
})

export default rootReducer