import { FIRST_LOAD_PAGE_SUCCESS, LEVEL_CHANGED, FACULTY_CHANGED } from '../constants/action-types'

const initialState = [
]

export default function courses(state = initialState, action) {
    switch (action.type) {
        case LEVEL_CHANGED:
        case FIRST_LOAD_PAGE_SUCCESS:
            const newList = []
            action.payload.courses.forEach(element => {
                if (newList.indexOf(element + '') === -1) {
                    newList.push(element + '')
                }
            })
            return newList
        case FACULTY_CHANGED:
            return initialState
        default:
            return state
    }
}
