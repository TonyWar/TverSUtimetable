import { takeEvery } from 'redux-saga/effects'
import * as ActionTypes from '../constants/action-types'
import * as PreloadSaga from './preload'
import * as FieldsSaga from './fields-saga'
import * as LoadSaga from './load-saga'

export default function* root() {
    yield takeEvery(ActionTypes.LOAD_FACULTIES_REQUEST, LoadSaga.loadFaculties)
    yield takeEvery(ActionTypes.FIRST_LOAD_PAGE, PreloadSaga.preparePage)
    yield takeEvery(ActionTypes.CHANGE_FIELD_VALUE, FieldsSaga.fieldChanged)
}
