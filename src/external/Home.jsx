import Welcomee from "./Welcomee"
import Nav from "./nav/nav"
import Courses from "./Courses/Courses"
import Blog from "./Blog/Blog"
import Contact from "./contact/Contact"
import Instructor from "./instructor/Instructor"
import Footer from "./footer/footer"

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
const Home = () => {
  return (
    <>

    <Router>
      <Nav/>
        <Routes>
            <Route path="/" element={<Welcomee />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/instructor" element={<Instructor />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/main" element={<Main />} />    */}
        </Routes>
      <Footer/>
    </Router>   

    </>
  )
}

export default Home