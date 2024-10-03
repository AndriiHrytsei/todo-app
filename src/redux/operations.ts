import { auth } from "../config/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../config/firebase"
import { doc, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

//? ––––––––––––––––––––––––––––––– AUTHENTICATION ––––––––––––––––––––––––––––––– 


interface CredentialsInterface {
  email: string;
  password: string;
}

export const signUp = createAsyncThunk(
  "slice/signUp",
  async (credentials: CredentialsInterface, thunkAPI) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      await setDoc(doc(db, "users", userCredentials.user.uid), {
        email: credentials.email,
        tasks: []
      })
      return { email: userCredentials.user.email, id: userCredentials.user.uid }
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
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      return { email: userCredentials.user.email, id: userCredentials.user.uid }
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
