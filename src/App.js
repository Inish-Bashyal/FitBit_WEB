import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import AddWorkout from "./components/addWorkout/addWorkout";
import Footer from "./components/footer/footer";
import TopBar from "./components/topbar/topbar";
import AboutUs from "./pages/aboutUs/aboutUs";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Setting from "./pages/settings/settings";
import Single from "./pages/single/single";
import Workout from "./pages/workout/workout";
import { RequireAuth } from './utils/RequireAuth';
import { AuthProvider } from './utils/authContext';


function App() {
  return (
    <Router>
            <AuthProvider>

        <TopBar/>

        <Routes>
            <Route exact path="/dashboard" element={<RequireAuth><Home/></RequireAuth>} />

            <Route path="/register" element={<Register/>} />

            <Route path="/" element={<Login/>} />


            <Route path="/settings" element={<Setting/>} />

            <Route path="/post" element={<Single/>}/>

            <Route path="/addWorkout" element={<AddWorkout/>}/>

            <Route path="/workout" element={<Workout/>}/>

            <Route path="/aboutUs" element={<AboutUs/>}/>

            <Route path="/contactUs" element={<Contact/>}/>
              
        </Routes>
        <Footer />
        </AuthProvider>

    </Router>
  );
}

export default App;