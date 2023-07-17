import Home from "./pages/home/Home"
import TopBar from "./components/topbar/topbar";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import Setting from "./pages/settings/settings";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import {
  BrowserRouter as Router,
  Routes,
  Route}
 from "react-router-dom";

function App() {
  return (
    <Router>
        <TopBar/>

        <Routes>
            <Route exact path="/" element={<Home/>} />

            <Route path="/register" element={<Register/>} />

            <Route path="/login" element={<Login/>} />

            <Route path="/write" element={<Write/>} />

            <Route path="/settings" element={<Setting/>} />

            <Route path="/post" element={<Single/>}/>
              
        </Routes>
    </Router>
  );
}

export default App;