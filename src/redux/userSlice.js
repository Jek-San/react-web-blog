import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userData: JSON.parse(localStorage.getItem("userData")) || null,
  isFetching: false,
  error: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUserRequest: (state) => {
      state.isFetching = true;
    },
    loginUserSuccess: (state, action) => {
      state.userData = action.payload;
      state.isFetching = false;
      state.error = null

    },
    loginUserFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },


    loginUser: (state, action) => {
      // Update the user state with the action payload (user data)
      state.userData = action.payload;
    },
    logoutUser: (state) => {
      state.userData = null;

      localStorage.removeItem("userData");
    },
  }
})

export const { loginUser, logoutUser } = userSlice.actions;
export const { loginUserRequest, loginUserSuccess, loginUserFailure, } = userSlice.actions;
export default userSlice.reducer;

export const selectUserData = state => state.user.userData
export const selectIsFetching = (state) => state.user.isFetching
export const selectError = (state) => state.user.error