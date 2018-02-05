import {  } from '../constants/action-types'

const initialState = [

]

export default function semesters(state = initialState, action) {
    switch (action.type) {
        // case INIT_SEMESTERS_LIST_SUCCESS:
        // case GET_TIMETABLES_SUCCESS:
        //     const newState = []
        //     action.payload.forEach(item => {
        //         newState.push({
        //             year: item._id.year,
        //             semester: item._id.semester
        //         })
        //     })
        //     return newState
        default:
            return state
    }
}