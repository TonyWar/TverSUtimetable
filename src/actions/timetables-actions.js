import { GET_TIMETABLES_REQUEST, GET_TIMETABLE_REQUEST } from '../constants/action-types'

export function getTimetables(facultyID) {
    return ({ type: GET_TIMETABLES_REQUEST, payload: facultyID })
}

export function getTimetable(year, semester, facultyID, level, cource) {
    return ({ type: GET_TIMETABLE_REQUEST, payload: { year, semester, facultyID, level, cource } })
}