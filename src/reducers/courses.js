import {  } from '../constants/action-types'

const initialState = [
    '1',
    '2'
]

export default function courses(state = initialState, action) {
    switch (action.type) {
        // case INIT_SOME_TIMETABLE_SUCCESS:
        //     const newList = []
        //     action.payload.courses.forEach(element => {
        //         if (newList.indexOf(element + '') === -1) {
        //             newList.push(element + '')
        //         }
        //     })
        //     return newList
        default:
            return state
    }
}