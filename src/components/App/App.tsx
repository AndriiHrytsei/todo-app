import { onAuthStateChanged } from "firebase/auth";
import { Suspense, lazy, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { auth } from "../../config/firebase";


const SignUp = lazy(() => import("../../pages/SignUp"));
const SignIn = lazy(() => import("../../pages/SignIn"));
const Tasks = lazy(() => import("../../pages/Tasks"));
const Loading = lazy(() => import("../../pages/Loading"));

function App() {

  

  return (
    <>
      <Link to="/">SignUp</Link>
      <Link to="/signIn">SignIn</Link>
      <Link to="/tasks">Tasks</Link>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
