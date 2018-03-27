import { FACULTY_CHANGED, FIRST_LOAD_PAGE_SUCCESS, FACULTY_UPDATED } from '../constants/action-types'

const initialState = [

]

export default function semesters(state = initialState, action) {
    const newState = []
    switch (action.type) {
        case FIRST_LOAD_PAGE_SUCCESS:
            action.payload.semesters.forEach(item => {
                newState.push({
                    year: item._id.year,
                    semester: item._id.semester
                })
            })
            return newState
        case FACULTY_UPDATED:
        case FACULTY_CHANGED:
            action.payload.forEach(item => {
                newState.push({
                    year: item._id.year,
                    semester: item._id.semester
                })
            })
            return newState
        default:
            return state
    }
}
