import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { load, save } from 'redux-localstorage-simple'
import count from 'state/counter/counterSlice'
import user from 'state/user/userSlice'
const store = configureStore({
  reducer: {
    count,
    user
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }),
//   preloadedState: load({ states: PERSISTED_KEYS, disableWarnings: process.env.NODE_ENV === 'test' }),
})

// store.dispatch(updateVersion())

setupListeners(store.dispatch)

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch