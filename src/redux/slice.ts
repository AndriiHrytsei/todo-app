import { createSlice } from "@reduxjs/toolkit";

interface UserInterface {
  email: string,
  id: string,
  tasks: string[]
}


interface InitialStateInterface {
  user: UserInterface,
  isLoggedIn: boolean,
  username: string
}

const initialState: InitialStateInterface = {
  user: {
    email: "",
    id: "",
    tasks: []
  },
  isLoggedIn: false,
  username: ""
}

const slice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {}
})



export const sliceReducer = slice.reducer