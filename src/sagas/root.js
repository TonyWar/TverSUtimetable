import { takeEvery } from 'redux-saga/effects'
import * as ActionTypes from '../constants/action-types'
import * as PreloadSaga from './preload'
import * as FieldsSaga from './fields-saga'

export default function* root() {
    console.log('Saga started')
    yield takeEvery(ActionTypes.FIRST_LOAD_PAGE, PreloadSaga.preparePage)
    yield takeEvery(ActionTypes.CHANGE_FIELD_VALUE, FieldsSaga.fieldChanged)
}
