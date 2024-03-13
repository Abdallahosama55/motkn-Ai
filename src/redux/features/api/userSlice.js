import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BEARER_TOKEN } from "../../../helpers/constants";

export const getCurrentUser = createAsyncThunk(
  "user/getCurrentUser",
  async () => {
    const response = await axios({
      method: "get",
      url: `https://srv475086.hstgr.cloud/api/userinfo/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExMjgyNzc2LCJpYXQiOjE3MDk5ODY3NzYsImp0aSI6ImE5NzEyODNlMmI5ODQ0MjViZjUwOGI1NTdkNTdkYjM5IiwidXNlcl9pZCI6NDZ9.V3ua7D0Z2MJKIaH3JjpdZ01dz-TxtmK7jtrbCZR25Rc"}`,
      },
    });
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    profile_picture: "",
    subscription_plan: "Free",
    is_staff: false,
    is_superuser: false,
    username: "",
  },
  reducers: {}, // Remove empty reducers object
  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
      state.username = payload.username;
      state.profile_picture = payload.profile_picture;
      state.subscription_plan = payload.subscription_plan;
      state.is_staff = payload.is_staff;
      state.is_superuser = payload.is_superuser;
    });
  },
});

// Remove unnecessary import and incorrect action export
// export const { addTodo } = checkerSlice.actions;
export default userSlice.reducer;
