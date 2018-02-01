import { call, put } from 'redux-saga/effects'
import * as ActionTypes from '../constants/action-types'
import * as Api from '../api/timetables-api'

export function* getTimetables(action) {
    try {
        const response = yield call(Api.getTimetables, action.payload)
        yield put({ type: ActionTypes.GET_TIMETABLES_SUCCESS, payload: response })
    } catch (e) {
        yield put({ type: ActionTypes.GET_TIMETABLES_FAILED, message: e.message })
    }
}