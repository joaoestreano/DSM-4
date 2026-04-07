import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";

// Configura a store central do Redux
export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

// Tipos para usar no React com segurança
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
