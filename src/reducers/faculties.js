import { GET_FACULTIES_SUCCESS } from '../constants/action-types'

const initialState = [

]

export default function faculties(state = initialState, action) {
    switch (action.type) {
        case GET_FACULTIES_SUCCESS:
            return action.payload
        default:
            return state
    }
}