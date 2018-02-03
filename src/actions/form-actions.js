import { SET_FIELD } from '../constants/action-types'

export function changeField(fieldName, fieldValue) {
    return { type: SET_FIELD, field: fieldName, value: fieldValue }
}