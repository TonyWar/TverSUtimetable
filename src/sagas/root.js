import { takeEvery } from 'redux-saga/effects'
import * as ActionTypes from '../constants/action-types'
import * as FacultySaga from './faculties'

export default function* root() {
    yield takeEvery(ActionTypes.GET_FACULTIES_REQUEST, FacultySaga.getFaculties)
    console.log('Saga started')
}
