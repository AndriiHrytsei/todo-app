import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "../../pages/Registration";
import Tasks from "../../pages/Tasks";


const Login = lazy(() => import("../../pages/Login"))
// const Registration = lazy(() => import("../../pages/Registration"))
// const Tasks = lazy(() => import("../../pages/Tasks"))
const Loading = lazy(() => import("../../pages/Loading"))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/todo-app/" element={<Registration />}/>
        <Route path="/todo-app/login" element={<Login />}/>
        <Route path="/todo-app/tasks" element={<Tasks />}/>
      </Routes>
    </Suspense>
  );
}

export default App;
