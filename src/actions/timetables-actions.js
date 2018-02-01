import { GET_TIMETABLES_REQUEST } from '../constants/action-types'

export function getTimetables(facultyID) {
    return ({ type: GET_TIMETABLES_REQUEST, payload: facultyID })
}