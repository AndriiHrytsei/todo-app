import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";


const Registration = lazy(() => import("../../pages/Registration"))
const Login = lazy(() => import("../../pages/Login"))
const Tasks = lazy(() => import("../../pages/Tasks"))
const Loading = lazy(() => import("../../pages/Loading"))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Registration />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/tasks" element={<Tasks />}/>
      </Routes>
    </Suspense>
  );
}

export default App;
