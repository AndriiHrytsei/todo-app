import { createSlice } from "@reduxjs/toolkit";
import { signUp, signIn, logOut } from "./operations";

interface UserInterface {
  email: string | null | undefined;
  id: string | null | undefined;
  tasks: string[];
}

interface InitialStateInterface {
  user: UserInterface;
  isLoggedIn: boolean;
}

const initialState: InitialStateInterface = {
  user: {
    email: "",
    id: "",
    tasks: [],
  },
  isLoggedIn: false,
};

const slice = createSlice({
  name: "slice",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signUp.rejected, (state: InitialStateInterface) => {
      state.user = { email: "", id: "", tasks: [] };
      state.isLoggedIn = false;
    });
    builder.addCase(
      signUp.fulfilled,
      (state: InitialStateInterface, action) => {
        state.user = {
          email: action.payload?.email,
          id: action.payload?.id,
          tasks: [],
        };
        state.isLoggedIn = true;
      }
    );
    builder.addCase(signIn.rejected, (state: InitialStateInterface) => {
      state.user = { email: "", id: "", tasks: [] };
      state.isLoggedIn = false;
    });
    builder.addCase(signIn.fulfilled, (state: InitialStateInterface, action) => {
      state.user = {
        email: action.payload?.email,
        id: action.payload?.id,
        tasks: [],
      };
      state.isLoggedIn = true;
    });
    builder.addCase(logOut.fulfilled, (state: InitialStateInterface) => {
      state.user = { email: "", id: "", tasks: [] };
      state.isLoggedIn = false;
    });
  },
});

export const sliceReducer = slice.reducer;
