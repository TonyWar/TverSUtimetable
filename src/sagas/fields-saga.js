import { call, put } from 'redux-saga/effects'
import * as ActionTypes from '../constants/action-types'
import * as Api from '../api/timetable-api'

export function* fieldChanged(action) {
    try {
        console.log(action)
        switch (action.field) {
            case 'faculty':
                const response = yield call(Api.getTimetables, action.data._id)
                yield put({type: ActionTypes.FACULTY_CHANGED, payload: response})
                break
            case 'semester':
                console.log(action.data)
                const responseSemester = yield call(Api.getTimetable, action.data.year, action.data.semester, action.data.ID)
                console.log(responseSemester)
                break
            default:
                break
        }
    } catch (e) {
        yield put({ type: ActionTypes.CHANGINT_FAILED, message: e.message })
    }
}
