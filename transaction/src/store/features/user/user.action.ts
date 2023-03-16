import { createAction } from '@reduxjs/toolkit';
import { IUser } from '../../../types/users';

export const fetchUserAction = createAction('Fetch user');

export const setUserAction = createAction<IUser>('Set user');

export const hideUserError = createAction('Hide error');
