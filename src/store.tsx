import {configureStore, combineReducers} from '@reduxjs/toolkit';
import messageDataReducer from './features/messageData/messageDataSlice';
import pimsDataReducer from './features/pimsData/pimsDataSlice';
import searchDataReducer from './features/searchData/searchDataSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['messageData', 'pimsData'],
  whitelist: 'searchData',
};

const rootReducer = combineReducers({
  messageData: messageDataReducer,
  pimsData: pimsDataReducer,
  searchData: searchDataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
