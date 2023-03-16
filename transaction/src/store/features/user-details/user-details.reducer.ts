import { createReducer } from '@reduxjs/toolkit';
import { setUserDetails } from './user-details.action';
import { IUserDetails } from '../../../types/users';
import { userEvent } from '../../events/user.event';

export const userDetailsReducer = createReducer<{ userDetails: IUserDetails | undefined }>({ userDetails: undefined }, (builder) =>
  builder
    .addCase(setUserDetails, (state, { payload }) => {
      state.userDetails = payload;
      return state;
    })
    .addCase(userEvent.revertData, (state, { payload }) => {
      state.userDetails = undefined;
      return state;
    })
);
