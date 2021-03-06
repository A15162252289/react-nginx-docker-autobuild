import { createSlice } from '@reduxjs/toolkit';
import { SupportedLocale } from 'constants/locales';

export interface UserState {
    matchesDarkMode: boolean // whether the dark mode media query matches 
    userDarkMode: boolean | null // the user's choice for dark mode or light mode
    userLocale: SupportedLocale | null
  }

const initialState: UserState = {
    matchesDarkMode: false, // whether the dark mode media query matches 
    userDarkMode: false,
    userLocale:null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateUserDarkMode: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userDarkMode = action.payload.userDarkMode;
    },
    updateUserLocale:(state, action) => {
        state.userLocale = action.payload.userLocale
      }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
  },
});

export const { updateUserDarkMode,updateUserLocale} = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state: AppState) => state.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount: number): AppThunk => (
//   dispatch,
//   getState
// ) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default userSlice.reducer;
