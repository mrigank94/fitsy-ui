import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USERTYPES } from "../../constants";
import { loginService } from "../../service/login";
import { signupService } from "../../service/signup";

export const login = createAsyncThunk("login", loginService);

export const signup = createAsyncThunk("signup", signupService);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoginForm: true,
    loginFormValues: {
      userId: "",
      password: "",
    },
    signupFormValues: {
      userId: "",
      password: "",
      email: "",
      name: "",
      userType: USERTYPES.PATIENT,
    },
    isPasswordVisible: false,
    signupData: {
      isLoading: false,
      isError: false,
      data: {},
    },
    loginData: {
      isLoading: false,
      isError: false,
      data: {},
    },
  },
  reducers: {
    toggleForm(state) {
      state.isLoginForm = !state.isLoginForm;
    },
    updateLoginFormValues(state, { payload }) {
      const key = payload.field;
      const value = payload.value;

      state.loginFormValues[key] = value;
    },
    updateSignupFormValues(state, { payload }) {
      const key = payload.field;
      const value = payload.value;

      state.signupFormValues[key] = value;
    },
    toggleIsPasswordVisible(state) {
      state.isPasswordVisible = !state.isPasswordVisible;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.loginData.isError = false;
      state.loginData.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loginData.isLoading = false;
      state.loginData.data = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loginData.isError = true;
      state.loginData.isLoading = false;
    });
    builder.addCase(signup.pending, (state, action) => {
      state.signupData.isError = false;
      state.signupData.isLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.signupData.isLoading = false;
      state.signupData.data = action.payload;
      state.isLoginForm = true;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.signupData.isError = true;
      state.loginData.isLoading = false;
    });
  },
});

export const {
  toggleForm,
  updateLoginFormValues,
  updateSignupFormValues,
  toggleIsPasswordVisible,
} = authSlice.actions;

export default authSlice.reducer;
