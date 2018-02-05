import { takeEvery } from 'redux-saga/effects'
import * as ActionTypes from '../constants/action-types'
import * as PreloadSaga from './preload'

export default function* root() {
    console.log('Saga started')
    yield takeEvery(ActionTypes.FIRST_LOAD_PAGE, PreloadSaga.preparePage)
}
