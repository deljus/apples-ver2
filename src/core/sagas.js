import { put, call, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import Apples from './requests';
import { addApple, editApple, addApples, deleteApple, startRequest, finishRequest } from './actions';


export function* getAllApplesSaga() {
  try {
    yield put(startRequest());
    const response = yield call(Apples.getAll);
    yield put(addApples(response.data));
  } catch (error) {
    message.error(error.message);
  } finally {
    yield put(finishRequest());
  }
}

export function* putAppleSaga(action) {
  try {
    yield put(startRequest());
    const response = yield call(Apples.add, action.apple);
    yield put(addApple(response.data));
  } catch (error) {
    message.error(error.message);
  } finally {
    yield put(finishRequest());
  }
}

export function* delAppleSaga(action) {
  try {
    yield put(startRequest());
    yield call(Apples.delete, action.id);
    yield put(deleteApple(action.id));
  } catch (error) {
    message.error(error.message);
  } finally {
    yield put(finishRequest());
  }
}

export function* editAppleSaga(action) {
  try {
    yield put(startRequest());
    const response = yield call(Apples.edit, action.id, action.apple);
    yield put(editApple(action.id, response.data));
  } catch (error) {
    message.error(error.message);
  } finally {
    yield put(finishRequest());
  }
}

export function* sagas() {
  yield takeLatest('GET_APPLES_SAGA', getAllApplesSaga);
  yield takeLatest('PUT_APPLE_SAGA', putAppleSaga);
  yield takeLatest('DEL_APPLE_SAGA', delAppleSaga);
  yield takeLatest('EDIT_APPLE_SAGA', editAppleSaga);
}
