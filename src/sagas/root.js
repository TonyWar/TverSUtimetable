import { takeEvery } from 'redux-saga/effects'
import * as ActionTypes from '../constants/action-types'
import * as FacultySaga from './faculties'
import * as TimeTableSaga from './timetables'

export default function* root() {
    yield takeEvery(ActionTypes.GET_FACULTIES_REQUEST, FacultySaga.getFaculties)
    yield takeEvery(ActionTypes.GET_TIMETABLES_REQUEST, TimeTableSaga.getTimetables)
    console.log('Saga started')
}