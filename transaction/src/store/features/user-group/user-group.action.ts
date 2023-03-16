import { createAction } from '@reduxjs/toolkit';
import { IUserGroup } from '../../../types/users';

export const fetchUserGroupAction = createAction('Fetch user group');

export const setUserGroup = createAction<IUserGroup | undefined>('Set user group');
