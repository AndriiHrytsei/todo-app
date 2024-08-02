import { useEffect } from "react";
import { logOut } from "../redux/operations";
import { useAppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const Tasks = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    dispatch(logOut());
    navigate("/");
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      }
    });
  }, []);

  return (
    <main>
      <h1>Tasks</h1>
      <button type="button" onClick={handleButtonClick}>
        logout
      </button>
    </main>
  );
};

export default Tasks;
