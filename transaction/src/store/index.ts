import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
import { configureStore } from '@reduxjs/toolkit';
import { userSaga } from './features/user/user.saga';
import { userReducer } from './features/user/user.reducer';
import { userGroupSaga } from './features/user-group/user-group.saga';
import { userGroupReducer } from './features/user-group/user-group.reducer';
import { userDetailsReducer } from './features/user-details/user-details.reducer';
import { userDetailsSaga } from './features/user-details/user-details.saga';
import { userAvatarReducer } from './features/user-avatar/user-avatar.reducer';
import { userAvatarSaga } from './features/user-avatar/user-avatar.saga';

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: true,
      serializableCheck: false,
    })
      .concat(sagaMiddleware),
  preloadedState: {},
  reducer: {
    userReducer,
    userGroupReducer,
    userDetailsReducer,
    userAvatarReducer
  },
});

sagaMiddleware.run(userSaga);
sagaMiddleware.run(userGroupSaga);
sagaMiddleware.run(userDetailsSaga);
sagaMiddleware.run(userAvatarSaga);

export type RootState = ReturnType<typeof store.getState>
