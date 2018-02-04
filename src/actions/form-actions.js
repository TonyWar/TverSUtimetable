import { SET_FIELD, INIT_TIMETABLE_REQUEST, CLEAR_TIMETABLE } from '../constants/action-types'

export function changeField(fieldName, fieldValue) {
    return { type: SET_FIELD, field: fieldName, value: fieldValue }
}

export function initTimetable() {
    return { type: INIT_TIMETABLE_REQUEST }
}

export function getTimetableOfFaculty(facultyID) {
    return { type: INIT_TIMETABLE_REQUEST, payload: facultyID }
}

export function clearTimetable() {
    return { type: CLEAR_TIMETABLE }
}