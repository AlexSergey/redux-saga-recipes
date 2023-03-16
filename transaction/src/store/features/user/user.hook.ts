import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { fetchUserAction } from './user.action';
import { RootState } from '../../index';
import { IUser } from '../../../types/users';

export const useUsersHook = (): [IUser | undefined, boolean, () => void] => {
  const { user, error } = useSelector<RootState, { user: IUser | undefined, error: boolean }>(state => state.userReducer);
  const dispatch = useDispatch();

  const fetchUsers = useCallback((): void => {
    dispatch(fetchUserAction());
  }, [dispatch]);

  return [user, error, fetchUsers];
}
