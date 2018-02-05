import { call, put } from 'redux-saga/effects'
import * as ActionTypes from '../constants/action-types'
import * as Api from '../api/timetable-api'

export function* preparePage() {
    try {
        const responseFaculties = yield call(Api.getFaculties)
        console.log(responseFaculties)
        const selectedFaculty = localStorage.facultyID || '5a2c622731531ab838dccde4'
        const responseSemesters = yield call(Api.getTimetables, selectedFaculty)

        yield put({ type: ActionTypes.FIRST_LOAD_PAGE_SUCCESS, payload: {
            faculties: responseFaculties,
            semesters: responseSemesters
        }})
    } catch (e) {
        yield put({ type: ActionTypes.FIRST_LOAD_PAGE_FAILED, message: e.message })
    }
}
