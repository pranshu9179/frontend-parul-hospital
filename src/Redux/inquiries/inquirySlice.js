import { createSlice } from '@reduxjs/toolkit';
import {
  createInquiry,
  fetchInquiries,
  fetchInquiryById,
  updateInquiry,
  deleteInquiry,
} from './inquiryThunks';

const inquirySlice = createSlice({
  name: 'inquiries',
  initialState: {
    inquiries: [],
    inquiry: null,
    loading: false,
    error: null,
    successMessage: null,
  },
  reducers: {
    clearMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // 👉 Create Inquiry
      .addCase(createInquiry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createInquiry.fulfilled, (state, action) => {
        state.loading = false;
        state.inquiries.push(action.payload);
        state.successMessage = 'Inquiry created successfully';
      })
      .addCase(createInquiry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 👉 Fetch All Inquiries
      .addCase(fetchInquiries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInquiries.fulfilled, (state, action) => {
        state.loading = false;
        state.inquiries = action.payload;
      })
      .addCase(fetchInquiries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 👉 Fetch Inquiry By ID
      .addCase(fetchInquiryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInquiryById.fulfilled, (state, action) => {
        state.loading = false;
        state.inquiry = action.payload;
      })
      .addCase(fetchInquiryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 👉 Update Inquiry
      .addCase(updateInquiry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateInquiry.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.inquiries.findIndex((inq) => inq._id === action.payload._id);
        if (index !== -1) {
          state.inquiries[index] = action.payload;
        }
        state.successMessage = 'Inquiry updated successfully';
      })
      .addCase(updateInquiry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // 👉 Delete Inquiry
      .addCase(deleteInquiry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteInquiry.fulfilled, (state, action) => {
        state.loading = false;
        state.inquiries = state.inquiries.filter((inq) => inq._id !== action.payload);
        state.successMessage = 'Inquiry deleted successfully';
      })
      .addCase(deleteInquiry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearMessages } = inquirySlice.actions;
export default inquirySlice.reducer;
