import { createReducer } from '@reduxjs/toolkit';
import { setUserGroup } from './user-group.action';
import { IUserGroup } from '../../../types/users';
import { userEvent } from '../../events/user.event';

export const userGroupReducer = createReducer<{ userGroup: IUserGroup | undefined }>({ userGroup: undefined }, (builder) =>
  builder
    .addCase(setUserGroup, (state, { payload }) => {
      state.userGroup = payload;
      return state;
    })
    .addCase(userEvent.revertData, (state, { payload }) => {
      state.userGroup = undefined;
      return state;
    })
);
