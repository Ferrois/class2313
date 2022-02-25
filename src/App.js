import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginContext } from "./Context/LoginContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Login from "./Components/Login";
import Info from "./Components/Info";

function App() {
  const [code, setCode] = useState();
  const [login, setLogin] = useContext(LoginContext);
  useEffect(async () => {
    const recCode = await axios.get("http://localhost:4000/logintokencode");
    setCode(recCode.data);
  }, []);
  useEffect(() => {
    if (localStorage.getItem("loginToken") !== code) return;
    setLogin({ ...login, loggedIn: true });
  }, [code]);
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={login.loggedIn ? <Home /> : <Login />} />
          <Route path="/info" element={login.loggedIn? <Info/> : <Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
