import { auth } from "../config/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

interface CredentialsInterface {
  email: string;
  password: string;
}

export const signUp = createAsyncThunk(
  "slice/signUp",
  async (credentials: CredentialsInterface, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      return { email: userCredential.user.email, id: userCredential.user.uid }
    } catch (err) {
      const error = err as Error;
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "slice/signIn",
  async (credentials: CredentialsInterface, thunkAPI) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
    } catch (err) {
      const error = err as Error;
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "slice/logOut",
  async (_, thunkAPI) => {
    try {
      await signOut(auth)
    } catch (err) {
      const error = err as Error
      thunkAPI.rejectWithValue(error.message)
    }
  }
);
