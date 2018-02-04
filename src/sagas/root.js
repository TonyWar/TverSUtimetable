import { takeEvery } from 'redux-saga/effects'
import * as ActionTypes from '../constants/action-types'
import * as FacultySaga from './faculties'
import * as TimeTableSaga from './timetables'
import * as FormSaga from './form'

export default function* root() {
    yield takeEvery(ActionTypes.GET_FACULTIES_REQUEST, FacultySaga.getFaculties)
    yield takeEvery(ActionTypes.GET_TIMETABLES_REQUEST, TimeTableSaga.getTimetables)

    yield takeEvery(ActionTypes.INIT_TIMETABLE_REQUEST, FormSaga.initFaculties)
    yield takeEvery(ActionTypes.INIT_SEMESTERS_LIST_REQUEST, FormSaga.initSemesters)
    yield takeEvery(ActionTypes.INIT_LEVEL, FormSaga.initCourceList)
    console.log('Saga started')
}