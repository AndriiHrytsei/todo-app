import { Suspense, lazy } from "react";
import { Link, Route, Routes } from "react-router-dom";

const Registration = lazy(() => import("../../pages/Registration"));
const Login = lazy(() => import("../../pages/Login"));
const Tasks = lazy(() => import("../../pages/Tasks"));
const Loading = lazy(() => import("../../pages/Loading"));

function App() {
  return (
    <>
      <Link to="/">Registration</Link>
      <Link to="/login">Login</Link>
      <Link to="/tasks">Tasks</Link>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
