import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserDetailsAction } from './user-details.action';
import { RootState } from '../../index';
import { IUser, IUserDetails } from '../../../types/users';

export const useUserDetails = (): IUserDetails | undefined => {
  const details = useSelector<RootState, IUserDetails | undefined>(state => state.userDetailsReducer.userDetails);
  const user = useSelector<RootState, IUser | undefined>(state => state.userReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDetailsAction());
  }, [dispatch, user]);

  return details;
}
