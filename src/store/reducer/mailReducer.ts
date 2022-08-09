import { MailRepositorie } from "./../../repositories/MailRepositorie";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../lib/api";

interface MailState {
  loading: boolean;
  error: boolean;
  success: boolean;
}

export const sendMail = createAsyncThunk(
  "mail/send",
  async (data: MailRepositorie) => {
    try {
      api
        .post("/api/mail/send", data)
        .then((r) => r)
        .catch((err) => err);
    } catch (error) {
      return error;
    }
  }
);

export const mailSlice = createSlice({
  name: "slice/mail",
  initialState: {} as MailState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(sendMail.fulfilled, (state) => {
      state.error = false;
      state.loading = false;
      state.success = true;
    });

    addCase(sendMail.pending, (state) => {
      state.error = false;
      state.success = false;
      state.loading = true;
    });

    addCase(sendMail.rejected, (state) => {
      state.loading = false;
      state.success = false;
      state.error = true;
    });
  },
});

export const mailReducer = mailSlice.reducer;
