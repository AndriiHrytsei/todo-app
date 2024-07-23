import { configureStore } from "@reduxjs/toolkit";
import { sliceReducer } from "./slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: sliceReducer
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()