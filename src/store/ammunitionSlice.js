import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunks
export const fetchAmmunition = createAsyncThunk(
  'ammunition/fetchAmmunition',
  async (operationId, { rejectWithValue }) => {
    try {
      // TODO: Replace with actual API call
      const response = await fetch(`/api/operations/${operationId}/ammunition`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createAmmunition = createAsyncThunk(
  'ammunition/createAmmunition',
  async (ammunitionData, { rejectWithValue }) => {
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/ammunition', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ammunitionData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateAmmunition = createAsyncThunk(
  'ammunition/updateAmmunition',
  async ({ id, ...ammunitionData }, { rejectWithValue }) => {
    try {
      // TODO: Replace with actual API call
      const response = await fetch(`/api/ammunition/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ammunitionData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteAmmunition = createAsyncThunk(
  'ammunition/deleteAmmunition',
  async (id, { rejectWithValue }) => {
    try {
      // TODO: Replace with actual API call
      await fetch(`/api/ammunition/${id}`, {
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

const ammunitionSlice = createSlice({
  name: 'ammunition',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch ammunition
      .addCase(fetchAmmunition.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAmmunition.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAmmunition.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create ammunition
      .addCase(createAmmunition.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAmmunition.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(createAmmunition.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update ammunition
      .addCase(updateAmmunition.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAmmunition.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateAmmunition.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete ammunition
      .addCase(deleteAmmunition.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAmmunition.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(deleteAmmunition.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = ammunitionSlice.actions;
export default ammunitionSlice.reducer;