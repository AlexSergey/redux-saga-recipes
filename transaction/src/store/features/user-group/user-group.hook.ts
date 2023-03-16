import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserGroupAction } from './user-group.action';
import { RootState } from '../../index';
import { IUser, IUserGroup } from '../../../types/users';

export const useUserGroup = (): IUserGroup | undefined => {
  const group = useSelector<RootState, IUserGroup | undefined>(state => state.userGroupReducer.userGroup);
  const user = useSelector<RootState, IUser | undefined>(state => state.userReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserGroupAction());
  }, [dispatch, user]);

  return group;
}
