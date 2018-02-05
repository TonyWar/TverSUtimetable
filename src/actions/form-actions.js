import { CHANGE_FIELD_VALUE } from '../constants/action-types'

export function changeField(fieldName, fieldValue, data) {
    return { type: CHANGE_FIELD_VALUE, field: fieldName, value: fieldValue, data: data }
}
