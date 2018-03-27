import { call, put } from 'redux-saga/effects'
import * as ActionTypes from '../constants/action-types'
import * as Api from '../api/timetable-api'

export function* fieldChanged(action) {
    try {
        let response
        let responseSemester
        switch (action.field) {
            case 'faculty':
                response = yield call(Api.getTimetables, action.data._id)
                yield put({type: ActionTypes.FACULTY_CHANGED, payload: response.reverse()})
                // if (response.length > 0) {
                //     responseSemester = yield call(Api.getTimetable, response[0]._id.year, response[0]._id.semester, action.data._id)
                //     yield put({type: ActionTypes.SEMESTER_CHANGED, payload: responseSemester})
                //     yield put({type: ActionTypes.LEVEL_CHANGED, payload: responseSemester})
                //     yield put({type: ActionTypes.COURCE_CHANGED, payload: responseSemester})
                // }
                break
            case 'semester':
                responseSemester = yield call(Api.getTimetable, action.data.year, action.data.semester, action.data.ID)
                yield put({type: ActionTypes.SEMESTER_CHANGED, payload: responseSemester})
                break
            case 'level':
                const responseLevel = yield call(Api.getTimetable, action.data.year, action.data.semester, action.data.ID, action.data.level)
                yield put({type: ActionTypes.LEVEL_CHANGED, payload: responseLevel})
                break
            case 'course':
                const responseCourse = yield call(Api.getTimetable, action.data.year, action.data.semester, action.data.ID, action.data.level, action.data.course)
                yield put({type: ActionTypes.COURCE_CHANGED, payload: responseCourse})
                break
            default:
                break
        }
    } catch (e) {
        yield put({ type: ActionTypes.CHANGINT_FAILED, message: e.message })
    }
}
