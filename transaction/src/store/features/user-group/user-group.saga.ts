import { call, put, takeEvery, take, select, SelectEffect } from 'redux-saga/effects';
import { fetchUserGroupAction, setUserGroup } from './user-group.action';
import axios from 'axios';
import { ResponseGenerator } from '../../../types/saga';
import { IUser, IUserGroup } from '../../../types/users';
import { userEvent } from '../../events/user.event';
import { RootState } from '../../index';

function selectUser<T>(selector: (s: RootState) => T): SelectEffect {
  return select(selector);
}

function* fetchGroup() {
  try {
    yield take(userEvent.fetched);
    const user: IUser | undefined = yield selectUser<IUser | undefined>((state: RootState): IUser | undefined => state.userReducer.user);
    if (user) {
      const { data }: ResponseGenerator<IUserGroup> = yield call(() => axios.get(`${process.env.API_URL}/api/groups/${user.user_id}`));
      yield put(setUserGroup(data));
    }
  } catch (error) {
    yield put(userEvent.revertData());
    yield put(userEvent.error());
  }
}

function* userGroupSaga() {
  yield takeEvery(fetchUserGroupAction, fetchGroup);
}

export { userGroupSaga };
