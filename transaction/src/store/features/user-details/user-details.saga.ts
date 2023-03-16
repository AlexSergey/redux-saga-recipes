import { call, put, takeEvery, take, select, SelectEffect } from 'redux-saga/effects';
import { fetchUserDetailsAction, setUserDetails } from './user-details.action';
import axios from 'axios';
import { ResponseGenerator } from '../../../types/saga';
import { IUser, IUserDetails } from '../../../types/users';
import { userEvent } from '../../events/user.event';
import { RootState } from '../../index';

function selectUser<T>(selector: (s: RootState) => T): SelectEffect {
  return select(selector);
}

function* fetchDetails() {
  try {
    yield take(userEvent.fetched);
    const user: IUser | undefined = yield selectUser<IUser | undefined>((state: RootState): IUser | undefined => state.userReducer.user);
    if (user) {
      const { data }: ResponseGenerator<IUserDetails> = yield call(() => axios.get(`${process.env.API_URL}/api/users/${user.user_id}`));
      yield put(setUserDetails(data));
    }
  } catch (error) {
    yield put(userEvent.revertData());
    yield put(userEvent.error());
  }
}

function* userDetailsSaga() {
  yield takeEvery(fetchUserDetailsAction, fetchDetails);
}

export { userDetailsSaga };
