import { call, put } from 'redux-saga/effects'
import * as ActionTypes from '../constants/action-types'
import * as Api from '../api/faculties-api'

export function* getFaculties() {
    try {
        const response = yield call(Api.getFaculties)
        yield put({ type: ActionTypes.GET_FACULTIES_SUCCESS, payload: response })
    } catch (e) {
        yield put({ type: ActionTypes.GET_FACULTIES_FAILED, message: e.message })
    }
}