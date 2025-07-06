import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunks
export const fetchOperations = createAsyncThunk(
  'operations/fetchOperations',
  async (_, { rejectWithValue }) => {
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/operations');
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createOperation = createAsyncThunk(
  'operations/createOperation',
  async (operationData, { rejectWithValue }) => {
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/operations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(operationData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateOperation = createAsyncThunk(
  'operations/updateOperation',
  async ({ id, ...operationData }, { rejectWithValue }) => {
    try {
      // TODO: Replace with actual API call
      const response = await fetch(`/api/operations/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(operationData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteOperation = createAsyncThunk(
  'operations/deleteOperation',
  async (id, { rejectWithValue }) => {
    try {
      // TODO: Replace with actual API call
      await fetch(`/api/operations/${id}`, {
        method: 'DELETE',
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  operations: [],
  selectedOperation: null,
  loading: false,
  error: null,
};

const operationsSlice = createSlice({
  name: 'operations',
  initialState,
  reducers: {
    selectOperation: (state, action) => {
      state.selectedOperation = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch operations
      .addCase(fetchOperations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOperations.fulfilled, (state, action) => {
        state.loading = false;
        state.operations = action.payload;
      })
      .addCase(fetchOperations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create operation
      .addCase(createOperation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOperation.fulfilled, (state, action) => {
        state.loading = false;
        state.operations.push(action.payload);
      })
      .addCase(createOperation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update operation
      .addCase(updateOperation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateOperation.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.operations.findIndex(op => op.id === action.payload.id);
        if (index !== -1) {
          state.operations[index] = action.payload;
        }
        if (state.selectedOperation?.id === action.payload.id) {
          state.selectedOperation = action.payload;
        }
      })
      .addCase(updateOperation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete operation
      .addCase(deleteOperation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteOperation.fulfilled, (state, action) => {
        state.loading = false;
        state.operations = state.operations.filter(op => op.id !== action.payload);
        if (state.selectedOperation?.id === action.payload) {
          state.selectedOperation = null;
        }
      })
      .addCase(deleteOperation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { selectOperation, clearError } = operationsSlice.actions;
export default operationsSlice.reducer;