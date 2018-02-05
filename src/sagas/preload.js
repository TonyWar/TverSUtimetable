import { call, put } from 'redux-saga/effects'
import * as ActionTypes from '../constants/action-types'
import * as Api from '../api/timetable-api'

export function* preparePage() {
    try {
        const responseFaculties = yield call(Api.getFaculties)
        console.log(responseFaculties)
        yield put({ type: ActionTypes.FIRST_LOAD_PAGE_SUCCESS, payload: {
            faculties: responseFaculties
        }})
    } catch (e) {
        yield put({ type: ActionTypes.FIRST_LOAD_PAGE_FAILED, message: e.message })
    }
}
