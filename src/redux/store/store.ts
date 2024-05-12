import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import rootReducer from '@/redux/rootReducer/rootReducer';
import { RootState } from '@/redux/rootReducer/rootReducer';
import { createWrapper } from 'next-redux-wrapper';

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  }) as EnhancedStore<RootState>;

export const wrapper = createWrapper(makeStore, { debug: true });

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
