import { Suspense, lazy } from "react";
import { Link, Route, Routes } from "react-router-dom";

const SignUp = lazy(() => import("../../pages/SignUp"));
const SignIn = lazy(() => import("../../pages/SignIn"));
const Tasks = lazy(() => import("../../pages/Tasks"));
const Loading = lazy(() => import("../../pages/Loading"));

function App() {
  return (
    <>
      <Link to="/">SignUp</Link>
      <Link to="/login">SignIn</Link>
      <Link to="/tasks">Tasks</Link>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
