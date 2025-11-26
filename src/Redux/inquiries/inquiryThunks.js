import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../config/axios';

const API_URL = '/inquiries';

// 📥 POST - Create Inquiry
export const createInquiry = createAsyncThunk(
  'inquiries/createInquiry',
  async (inquiryData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(API_URL, inquiryData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message || 'Failed to create inquiry');
    }
  }
);

// 📄 GET - Fetch All Inquiries
export const fetchInquiries = createAsyncThunk(
  'inquiries/fetchInquiries',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(API_URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message || 'Failed to fetch inquiries');
    }
  }
);

// 🔍 GET - Fetch Inquiry By ID
export const fetchInquiryById = createAsyncThunk(
  'inquiries/fetchInquiryById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${API_URL}/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message || 'Inquiry not found');
    }
  }
);

// ✏️ PUT - Update Inquiry
export const updateInquiry = createAsyncThunk(
  'inquiries/updateInquiry',
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`${API_URL}/${id}`, updatedData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message || 'Failed to update inquiry');
    }
  }
);

// ❌ DELETE - Delete Inquiry
export const deleteInquiry = createAsyncThunk(
  'inquiries/deleteInquiry',
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`${API_URL}/${id}`);
      return id; // Return ID to remove from state
    } catch (err) {
      return rejectWithValue(err.response.data.message || 'Failed to delete inquiry');
    }
  }
);
