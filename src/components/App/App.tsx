import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";


const SignUp = lazy(() => import("../../pages/SignUp"));
const SignIn = lazy(() => import("../../pages/SignIn"));
const Tasks = lazy(() => import("../../pages/Tasks"));
const Loading = lazy(() => import("../../pages/Loading"));
const NotFound = lazy(() => import("../../pages/NotFound"));


function App() {

   return (
    <>
      <Suspense fallback={<Loading />}>
      <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
