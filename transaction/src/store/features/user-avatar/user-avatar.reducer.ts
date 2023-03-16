import { createReducer } from '@reduxjs/toolkit';
import { setUserAvatar } from './user-avatar.action';

export const userAvatarReducer = createReducer<{ avatar: string | undefined }>({ avatar: undefined }, (builder) =>
  builder
    .addCase(setUserAvatar, (state, { payload }) => {
      state.avatar = payload;
      return state;
    })
);
