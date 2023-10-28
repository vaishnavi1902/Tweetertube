import Welcomee from "./welcome/Welcomee";
import Nav from ".//nav/Nav";
import Courses from "./Courses/Courses";
import Blog from "./Blog/Blog";
import Contact from "./contact/Contact";
import Instructor from "./instructor/Instructor";
import Footer from "./footer/Footer";
import Login from "./login/Login";
import Register from "./login/Register";
import Studentlogin from "./login/Studentlogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teacherlogin from "./login/Teacherlogin";
import Schoollogin from "./login/Schoollogin";
import Studentreg from "./login/Studentreg";
import Teacherreg from "./login/Teacherreg";
import Schoolreg from "./login/Schoolreg";
const Home = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Welcomee />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/studentlogin" element={<Studentlogin />} />
          <Route path="/teacherlogin" element={<Teacherlogin />} />
          <Route path="/schoollogin" element={<Schoollogin />} />
          <Route path="/studentreg" element={<Studentreg />} />
          <Route path="/teacherreg" element={<Teacherreg />} />
          <Route path="/schoolreg" element={<Schoolreg />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Home;
