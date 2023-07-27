import { configureStore } from "@reduxjs/toolkit"
import propertyReducer from '../features/slice'
export const store = configureStore({
    reducer: {
      specs:propertyReducer
    },
  })
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch