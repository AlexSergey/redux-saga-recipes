import { call, put, takeEvery, take, select, SelectEffect } from 'redux-saga/effects';
import { fetchUserAvatarAction, setUserAvatar } from './user-avatar.action';
import axios from 'axios';
import { ResponseGenerator } from '../../../types/saga';
import { IUser } from '../../../types/users';
import { userEvent } from '../../events/user.event';
import { RootState } from '../../index';

function selectUser<T>(selector: (s: RootState) => T): SelectEffect {
  return select(selector);
}

function* fetchAvatar() {
  try {
    yield take(userEvent.fetched);
    const user: IUser | undefined = yield selectUser<IUser | undefined>((state: RootState): IUser | undefined => state.userReducer.user);
    if (user) {
      const { data }: ResponseGenerator<{ url: string }> = yield call(() => axios.get(`${process.env.API_URL}/api/avatar/${user.user_id}`));
      if (data) {
        yield put(setUserAvatar(data.url));
      }
    }
  } catch (error) {
    yield put(userEvent.revertData());
    yield put(userEvent.error());
  }
}

function* userAvatarSaga() {
  yield takeEvery(fetchUserAvatarAction, fetchAvatar);
}

export { userAvatarSaga };
