import { createReducer } from '@reduxjs/toolkit';
import { hideUserError, setUserAction } from './user.action';
import { IUser } from '../../../types/users';
import { userEvent } from '../../events/user.event';

export const userReducer = createReducer<{ user: IUser | undefined, error: boolean }>({ user: undefined, error: false }, (builder) =>
  builder
    .addCase(hideUserError, (state, { payload }) => {
      state.error = false;
      return state;
    })
    .addCase(setUserAction, (state, { payload }) => {
      state.user = payload;
      return state;
    })
    .addCase(userEvent.revertData, (state, { payload }) => {
      state.user = undefined;
      return state;
    })
    .addCase(userEvent.error, (state, { payload }) => {
      state.error = true;
      return state;
    })
);
