import { FIRST_LOAD_PAGE_SUCCESS } from '../constants/action-types'

const initialState = [

]

export default function faculties(state = initialState, action) {
    switch (action.type) {
        case FIRST_LOAD_PAGE_SUCCESS:
            return action.payload.faculties
        // case INIT_FACULTIES_LIST_SUCCESS:
        // case GET_FACULTIES_SUCCESS:
        //     return action.payload
        default:
            return state
    }
}
