import { call, put } from 'redux-saga/effects'
import * as ActionTypes from '../constants/action-types'
import * as Api from '../api/timetable-api'

export function* loadFaculties() {
    try {
        const response = yield call(Api.getFaculties)
        yield put({type: ActionTypes.LOAD_FACULTIES_SUCCESS, payload: response})
    } catch (e) {
        yield put({ type: ActionTypes.LOAD_FACULTIES_FAILED, message: e.message })
    }
}
