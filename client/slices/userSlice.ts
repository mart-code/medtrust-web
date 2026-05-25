import { api } from "@/lib/api";
import { ApiResponse, AuthUser, UserRole } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  role: UserRole;
  firstName?: string;
  lastName?: string;
  specialisation?: string;
  licenseNumber?: string;
  organisationName?: string;
  registrationNumber?: string;
  institutionName?: string;
  institutionAddress?: string;
  latitude?: number;
  longitude?: number;
}

export interface UserState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  initialized: boolean;
  error: string | null;
}

interface AuthResponseData {
  user: AuthUser;
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  initialized: false,
  error: null,
};

function getErrorMessage(error: unknown) {
  const axiosError = error as AxiosError<{ message?: string | string[] }>;
  const message = axiosError.response?.data?.message;

  if (Array.isArray(message)) {
    return message.join(", ");
  }

  return message ?? "Something went wrong.";
}

export const fetchCurrentUser = createAsyncThunk<AuthUser, void, { rejectValue: string }>(
  "user/fetchCurrentUser",
  async (_, thunkAPI) => {
    try {
      const response = await api.get<ApiResponse<AuthUser>>("/auth/me");
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  },
);

export const loginUser = createAsyncThunk<AuthUser, LoginCredentials, { rejectValue: string }>(
  "user/loginUser",
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post<ApiResponse<AuthResponseData>>("/auth/login", credentials);
      return response.data.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  },
);

export const registerUser = createAsyncThunk<AuthUser, RegisterPayload, { rejectValue: string }>(
  "user/registerUser",
  async (payload, thunkAPI) => {
    try {
      const response = await api.post<ApiResponse<AuthResponseData>>("/auth/register", payload);
      return response.data.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  },
);

export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  "user/logoutUser",
  async (_, thunkAPI) => {
    try {
      await api.post("/auth/logout");
    } catch (error) {
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearAuthError: (state) => {
      state.error = null;
    },
    setUser: (state, action: PayloadAction<AuthUser | null>) => {
      state.user = action.payload;
      state.isAuthenticated = Boolean(action.payload);
      state.initialized = true;
      state.error = null;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.initialized = true;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.initialized = true;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.initialized = true;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload ?? "Unable to fetch the current user.";
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.initialized = true;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.initialized = true;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload ?? "Login failed.";
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.initialized = true;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.initialized = true;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload ?? "Registration failed.";
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.initialized = true;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.initialized = true;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload ?? "Logout failed.";
      });
  },
});

export const { clearAuthError, setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
