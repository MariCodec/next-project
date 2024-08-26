import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "../types/character";

export const API_URL = "https://rickandmortyapi.com/api";

interface CharacterState {
  characters: Character[];
  loading: boolean;
  page: number;
  pageCount: number;
  query: string;
  error: boolean;
}

const initialState: CharacterState = {
  characters: [],
  loading: false,
  page: 1,
  pageCount: 1,
  query: "",
  error: false,
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async ({ query, page }: { query: string; page: number }) => {
    const response = await fetch(
      `${API_URL}/character?name=${query}&page=${page}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    return data;
  }
);

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    resetState(state) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.characters = []; // Очищуємо попередні дані під час нового запиту
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload.results;
        state.pageCount = action.payload.info.pages;

        // Якщо персонажів не знайдено
        if (action.payload.results.length === 0) {
          state.error = true; // Встановлюємо помилку як істинну
        }
      })
      .addCase(fetchCharacters.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});
//     builder
//       .addCase(fetchCharacters.pending, (state) => {
//         state.loading = true;
//         state.error = false;
//       })
//       .addCase(fetchCharacters.fulfilled, (state, action) => {
//         state.loading = false;
//         state.characters = action.payload.results;
//         state.pageCount = action.payload.info.pages;
//       })
//       .addCase(fetchCharacters.rejected, (state, action) => {
//         state.loading = false;
//         state.error = false;
//       });
//   },
// });

export const { setPage, setQuery, resetState } = characterSlice.actions;

export default characterSlice.reducer;
