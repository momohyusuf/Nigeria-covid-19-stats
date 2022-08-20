import { configureStore } from '@reduxjs/toolkit';

import { covidStatsApi } from '../service/covidStatsApi';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [covidStatsApi.reducerPath]: covidStatsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(covidStatsApi.middleware),
});
