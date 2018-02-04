import { SET_FIELD, INIT_TIMETABLE_REQUEST } from '../constants/action-types'

export function changeField(fieldName, fieldValue) {
    return { type: SET_FIELD, field: fieldName, value: fieldValue }
}

export function initTimetable() {
    return { type: INIT_TIMETABLE_REQUEST }
}