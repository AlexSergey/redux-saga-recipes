import { createAction } from '@reduxjs/toolkit';

export const fetchUserAvatarAction = createAction('Fetch user avatar');

export const setUserAvatar = createAction<string | undefined>('Set user avatar');
