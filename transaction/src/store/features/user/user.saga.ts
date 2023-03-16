import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUserAction, hideUserError, setUserAction } from './user.action';
import axios from 'axios';
import { ResponseGenerator } from '../../../types/saga';
import { IUser } from '../../../types/users';
import { userEvent } from '../../events/user.event';

function* fetchUsers() {
  yield put(hideUserError());
  try {
    const { data }: ResponseGenerator<IUser> = yield call(() => axios.get(`${process.env.API_URL}/api/user`));
    if (data) {
      yield put(setUserAction(data));
      yield put(userEvent.fetched());
    }
  } catch (error) {
    yield put(userEvent.revertData());
    yield put(userEvent.error());
  }
}

function* userSaga() {
  yield takeEvery(fetchUserAction, fetchUsers);
}

export { userSaga };
