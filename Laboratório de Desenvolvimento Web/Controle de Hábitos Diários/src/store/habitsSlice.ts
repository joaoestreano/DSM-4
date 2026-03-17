import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface Habit {
  id: string;
  name: string;
  category: string;
  completed: boolean;
}

export interface HabitsState {
  habits: Habit[];
  filterCategory: string;
}

const initialState: HabitsState = {
  habits: [],
  filterCategory: 'Todas',
};

const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<{ name: string; category: string }>) => {
      state.habits.push({
        id: uuidv4(),
        name: action.payload.name,
        category: action.payload.category || 'Geral',
        completed: false,
      });
    },
    editHabit: (state, action: PayloadAction<{ id: string; name: string; category: string }>) => {
      const habit = state.habits.find((h) => h.id === action.payload.id);
      if (habit) {
        habit.name = action.payload.name;
        habit.category = action.payload.category;
      }
    },
    deleteHabit: (state, action: PayloadAction<string>) => {
      state.habits = state.habits.filter((h) => h.id !== action.payload);
    },
    toggleHabit: (state, action: PayloadAction<string>) => {
      const habit = state.habits.find((h) => h.id === action.payload);
      if (habit) {
        habit.completed = !habit.completed;
      }
    },
    clearCompleted: (state) => {
      state.habits = state.habits.filter((h) => !h.completed);
    },
    setFilterCategory: (state, action: PayloadAction<string>) => {
      state.filterCategory = action.payload;
    },
  },
});

export const {
  addHabit,
  editHabit,
  deleteHabit,
  toggleHabit,
  clearCompleted,
  setFilterCategory,
} = habitsSlice.actions;

export default habitsSlice.reducer;
