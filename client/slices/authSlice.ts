import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentUser, loginUser, logoutUser, registerUser } from "./userSlice";

interface AuthState {
  status: "idle" | "loading" | "authenticated" | "unauthenticated";
  error: string | null;
}

const initialState: AuthState = {
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state) => {
        state.status = "authenticated";
        state.error = null;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.status = "unauthenticated";
        state.error = action.payload ?? "Unable to fetch the current user.";
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.status = "authenticated";
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "unauthenticated";
        state.error = action.payload ?? "Login failed.";
      })
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = "authenticated";
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "unauthenticated";
        state.error = action.payload ?? "Registration failed.";
      })
      .addCase(logoutUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = "unauthenticated";
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = "unauthenticated";
        state.error = action.payload ?? "Logout failed.";
      });
  },
});

export default authSlice.reducer;
