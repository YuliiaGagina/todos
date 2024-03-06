import { configureStore } from '@reduxjs/toolkit'

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
import storage from 'redux-persist/lib/storage'

import { todoReducer } from './todo-slice'
import { filterReducer } from './filter-slice'

const persistConfig = {
  key: 'todos',
  version: 1,
  storage,
  whitelist: ['todos'],
}
const persistedReducer = persistReducer(persistConfig, todoReducer)

export const store = configureStore({
  reducer: {
    todos: persistedReducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
