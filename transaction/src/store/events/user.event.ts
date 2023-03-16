import { createAction } from '@reduxjs/toolkit';

export const userEvent = {
  revertData: createAction('Revert user data'),
  fetched: createAction('User fetched'),
  error: createAction('User error')
}
