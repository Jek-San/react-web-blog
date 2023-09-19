import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userData: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
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
export default userSlice.reducer;

export const selectUserData = state => state.user.userData