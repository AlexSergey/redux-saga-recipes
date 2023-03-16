import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserAvatarAction } from './user-avatar.action';
import { RootState } from '../../index';
import { IUser } from '../../../types/users';

export const useUserAvatar = (): string | undefined => {
  const avatar = useSelector<RootState, string | undefined>(state => state.userAvatarReducer.avatar);
  const user = useSelector<RootState, IUser | undefined>(state => state.userReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAvatarAction());
  }, [dispatch, user]);

  return avatar;
}
