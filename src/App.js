import Header from "./Components/Header";
// import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginContext } from "./Context/LoginContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Login from "./Components/Login";
import Info from "./Components/Info";
import ClassWheel from "./Components/Wheel";
import Funds from "./Components/GlobalLogs";
import Home from "./Components/Home";

function App() {
  // const [code, setCode] = useState(2313);
  const [login, setLogin] = useContext(LoginContext);
  // useEffect( () => {
    // const recCode = await axios.get("https://furthermathgang-api.herokuapp.com/logintokencode");
    // setCode(2313);
  // }, []);
  useEffect(() => {
    if (localStorage.getItem("loginToken") !== "2313") return;
    setLogin({ ...login, loggedIn: true });
    // alert(localStorage.getItem("loginToken"))
  }, []);
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={login.loggedIn ? <Home /> : <Login />}/>
          <Route path="/funds" element={login.loggedIn ? <Funds /> : <Login />} />
          <Route path="/info" element={login.loggedIn? <Info/> : <Login />}/>
          <Route path="/wheel" element={login.loggedIn? <ClassWheel/> : <Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
