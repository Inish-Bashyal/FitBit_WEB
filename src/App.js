import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import AddWorkout from "./components/addWorkout/addWorkout";
import TopBar from "./components/topbar/topbar";
import AboutUs from "./pages/aboutUs/aboutUs";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Setting from "./pages/settings/settings";
import Single from "./pages/single/single";
import Workout from "./pages/workout/workout";
import Write from "./pages/write/write";

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

            <Route path="/addWorkout" element={<AddWorkout/>}/>

            <Route path="/workout" element={<Workout/>}/>

            <Route path="/aboutUs" element={<AboutUs/>}/>
              
        </Routes>
    </Router>
  );
}

export default App;