import { GET_FACULTIES_SUCCESS, SET_FIELD } from '../constants/action-types'

const initialState = {
    faculty: '-1',
    semester: '-1',
    level: '0',
    course: '1'
}

export default function formFields(state = initialState, action) {
    switch (action.type) {
        case GET_FACULTIES_SUCCESS:
            for (let i = 0; i <= action.payload.length; i++) {
                if (action.payload[i].abbr === 'ПМиК') {
                    return {
                        ...state,
                        faculty: i + ''
                    }
                }
            }
            return state
        case SET_FIELD:
            return {
                ...state,
                [action.field]: action.value
            }
        default:
            return state
    }
}