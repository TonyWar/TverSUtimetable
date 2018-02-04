import { call, put } from 'redux-saga/effects'
import * as ActionTypes from '../constants/action-types'
import * as FacultyApi from '../api/faculties-api'
import * as TimetableApi from '../api/timetables-api'

export function* initFaculties(action) {
    try {
        const response = yield call(FacultyApi.getFaculties)
        if (!action.payload) {
            yield put({ type: ActionTypes.INIT_FACULTIES_LIST_SUCCESS, payload: response })
        }

        const facultyID = action.payload || '5a2c622731531ab838dccde4'

        // Поиск ПМК, чтобы найти список семестров
        yield put({ type: ActionTypes.INIT_SEMESTERS_LIST_REQUEST, payload: facultyID })
    } catch (e) {
        yield put({ type: ActionTypes.INIT_FACULTIES_LIST_FAILED, message: e.message })
    }
}

export function* initSemesters(action) {
    try {
        const response = yield call(TimetableApi.getTimetables, action.payload)
        yield put({ type: ActionTypes.INIT_SEMESTERS_LIST_SUCCESS, payload: response })
        yield put({
            type: ActionTypes.INIT_LEVEL,
            payload: {
                facultyID: action.payload,
                year: response[0]._id.year,
                semester: response[0]._id.semester
            }
        })
    } catch (e) {
        yield put({ type: ActionTypes.INIT_SEMESTERS_LIST_FAILED, message: e.message })
    }
}

export function* initCourceList(action) {
    try {
        const response = yield call(TimetableApi.getTimetable, action.payload.year, action.payload.semester, action.payload.facultyID)
        yield put({ type: ActionTypes.INIT_SOME_TIMETABLE_SUCCESS, payload: response })
    } catch (e) {
        yield put({ type: ActionTypes.INIT_SOME_TIMETABLE_FAILED, message: e.message })
    }
}

export function* initPage() {
    initFaculties()
}