import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReduser } from './contactSlise';
import { filterReduser } from './filterSlise';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootRedusers = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

const persistRedusers = persistReducer(persistConfig, rootRedusers);

export const store = configureStore({
  reducer: persistRedusers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
