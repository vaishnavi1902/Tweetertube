import Welcomee from "./welcome/Welcomee";
// import Nav from ".//nav/Nav";
import Courses from "./Courses/Courses";
import Blog from "./Blog/Blog";
import Contact from "./contact/Contact";
import Instructor from "./instructor/Instructor";
// import Footer from "./footer/Footer";
import Login from "./login/Login";
import Register from "./login/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashbord from "./Dashbord/Dashbord";
import { UserContextProvider } from '../context/UserContext';
import Dashbord from "./Dashbord/Dashbord";
import Mycourses from "./Dashbord/Mycourses";
// import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:8000/api/v1';
// axios.defaults.withCredentials = true;

const Home = () => {
  return (

    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcomee />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/mycourses" element={<Mycourses />} />
        </Routes>
      </Router>
    </UserContextProvider>

  );
};

export default Home;
