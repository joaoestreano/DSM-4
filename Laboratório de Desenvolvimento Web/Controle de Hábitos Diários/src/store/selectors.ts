import { RootState } from './store';

export const selectAllHabits = (state: RootState) => state.habits.habits;

export const selectFilterCategory = (state: RootState) => state.habits.filterCategory;

export const selectFilteredHabits = (state: RootState) => {
  const { habits, filterCategory } = state.habits;
  if (filterCategory === 'Todas') return habits;
  return habits.filter((h) => h.category === filterCategory);
};

export const selectCategories = (state: RootState): string[] => {
  const cats = state.habits.habits.map((h) => h.category);
  return ['Todas', ...Array.from(new Set(cats))];
};

export const selectCompletedCount = (state: RootState) =>
  state.habits.habits.filter((h) => h.completed).length;

export const selectTotalCount = (state: RootState) => state.habits.habits.length;
