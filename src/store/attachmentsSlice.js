import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunks
export const fetchAttachments = createAsyncThunk(
  'attachments/fetchAttachments',
  async (operationId, { rejectWithValue }) => {
    try {
      // TODO: Replace with actual API call
      const response = await fetch(`/api/operations/${operationId}/attachments`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createAttachment = createAsyncThunk(
  'attachments/createAttachment',
  async (attachmentData, { rejectWithValue }) => {
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/attachments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(attachmentData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateAttachment = createAsyncThunk(
  'attachments/updateAttachment',
  async ({ id, ...attachmentData }, { rejectWithValue }) => {
    try {
      // TODO: Replace with actual API call
      const response = await fetch(`/api/attachments/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(attachmentData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteAttachment = createAsyncThunk(
  'attachments/deleteAttachment',
  async (id, { rejectWithValue }) => {
    try {
      // TODO: Replace with actual API call
      await fetch(`/api/attachments/${id}`, {
        method: 'DELETE',
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const attachmentsSlice = createSlice({
  name: 'attachments',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch attachments
      .addCase(fetchAttachments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAttachments.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAttachments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create attachment
      .addCase(createAttachment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAttachment.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(createAttachment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update attachment
      .addCase(updateAttachment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAttachment.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateAttachment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete attachment
      .addCase(deleteAttachment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAttachment.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(deleteAttachment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = attachmentsSlice.actions;
export default attachmentsSlice.reducer;