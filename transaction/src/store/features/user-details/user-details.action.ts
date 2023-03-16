import { createAction } from '@reduxjs/toolkit';
import { IUserDetails } from '../../../types/users';

export const fetchUserDetailsAction = createAction('Fetch user details');

export const setUserDetails = createAction<IUserDetails | undefined>('Set user details');
