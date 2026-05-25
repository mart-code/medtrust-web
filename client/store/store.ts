import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import authReducer from "../slices/authSlice";
import doctorReducer from "../slices/doctorSlice";
import patientReducer from "../slices/patientSlice";
import {
  LoginCredentials,
  RegisterPayload,
  fetchCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../slices/userSlice";
import userReducer from "../slices/userSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        patient: patientReducer,
        doctor: doctorReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

function buildAuthStoreApi(dispatch: AppDispatch, getState: () => RootState) {
  return {
    get user() {
      return getState().user.user;
    },
    get isLoading() {
      return getState().user.isLoading;
    },
    get error() {
      return getState().user.error;
    },
    isAuthenticated() {
      return getState().user.isAuthenticated;
    },
    fetchMe() {
      return dispatch(fetchCurrentUser()).unwrap();
    },
    login(emailOrCredentials: string | LoginCredentials, password?: string) {
      const credentials =
        typeof emailOrCredentials === "string"
          ? { email: emailOrCredentials, password: password ?? "" }
          : emailOrCredentials;

      return dispatch(loginUser(credentials)).unwrap();
    },
    register(
      emailOrPayload: string | RegisterPayload,
      password?: string,
      role?: RegisterPayload["role"],
    ) {
      const payload =
        typeof emailOrPayload === "string"
          ? { email: emailOrPayload, password: password ?? "", role: role ?? "patient" }
          : emailOrPayload;

      return dispatch(registerUser(payload)).unwrap();
    },
    logout() {
      return dispatch(logoutUser()).unwrap();
    },
  };
}

type AuthStoreHook = (() => ReturnType<typeof buildAuthStoreApi>) & {
  getState: () => ReturnType<typeof buildAuthStoreApi>;
};

export const useAuthStore: AuthStoreHook = Object.assign(
  function useAuthStore() {
    const dispatch = useDispatch<AppDispatch>();
    const userState = useSelector((state: RootState) => state.user);

    return {
      ...buildAuthStoreApi(dispatch, store.getState),
      user: userState.user,
      isLoading: userState.isLoading,
      error: userState.error,
      isAuthenticated: () => userState.isAuthenticated,
    };
  },
  {
    getState: () => buildAuthStoreApi(store.dispatch, store.getState),
  },
);
