import { useNavigate } from "react-router-dom";
import { signUp } from "../../redux/operations";
import React, { useState } from "react";
import { useAppDispatch } from "../../redux/store";

const SignUp = () => {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signUp({email: email, password: password}))
    navigate("/tasks")
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="signUpEmail">Email</label>
      <input type="email" name="email" id="signUpEmail" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
      <label htmlFor="signUpPassword">Password</label>
      <input type="password" name="password" id="signUpPassword" value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;
