import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/stores/contentStore';

interface contentReducer {
  title: string | number;
  description: string | number;
  showModal: boolean;
  imageRender: string | null;
}

interface content {
  title: string | number;
  description: string | number;
  imageRender: string | null;
}

const initialState: contentReducer = {
  title: 'Debug Test',
  description: '',
  showModal: false,
  imageRender: '',
};

export const contentSlice = createSlice({
  name: 'contentReducer',
  initialState,
  reducers: {
    changeContent: (state, action: PayloadAction<content>) => {
      const { title, description, imageRender } = action.payload;
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.title = title;
      state.description = description;
      state.imageRender = imageRender;
    },
    openModal: (state) => {
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
    },
  },
});

export const { changeContent, openModal, closeModal } = contentSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.content;

export default contentSlice.reducer;
