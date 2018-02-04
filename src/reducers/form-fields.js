import { INIT_FACULTIES_LIST_SUCCESS, SET_FIELD, INIT_SEMESTERS_LIST_SUCCESS, INIT_LEVEL } from '../constants/action-types'

const initialState = {
    faculty: '-1',
    semester: '-1',
    level: '1',
    course: '1'
}

export default function formFields(state = initialState, action) {
    switch (action.type) {
        case INIT_SEMESTERS_LIST_SUCCESS:
            return {
                ...state,
                semester: '0'
            }
        case INIT_FACULTIES_LIST_SUCCESS:
            for (let i = 0; i <= action.payload.length; i++) {
                if (action.payload[i].abbr === 'ПМиК') {
                    return {
                        ...state,
                        faculty: i + ''
                    }
                }
            }
            return state
        case INIT_LEVEL:
            return {
                ...state,
                level: '1'
            }
        case SET_FIELD:
            return {
                ...state,
                [action.field]: action.value
            }
        default:
            return state
    }
}