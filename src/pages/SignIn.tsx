import { useEffect } from "react";
import SignInForm from "../components/SignInForm/SignInForm";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";


const SignIn = () => {

  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/tasks")
      }
    })
  }, [])

  return (
    <main>
      <Link to="/signUp">Sign up</Link>
      <h1>Sign in</h1>
      <SignInForm />
    </main>
  );
};

export default SignIn;
