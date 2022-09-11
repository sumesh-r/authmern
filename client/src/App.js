import Signup from "./components/Signup";
import Main from "./components/Main";
import Login from "./components/Login";
import {Route, Routes, Navigate} from 'react-router-dom'

function App() {
  const user = localStorage.getItem("token")
  return (
    <>
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<Navigate replace to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
