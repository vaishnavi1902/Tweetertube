import Welcomee from "./Welcomee"
import Footer from "./footer/footer"
import Nav from "./nav/nav"
import Main from "./Main/Main"
import Courses from "./Courses/Courses"
import Blog from "./Blog/Blog"
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
const Home = () => {
  return (
    <>

    <Router>
      <Nav/>
        <Routes>
            <Route path="/" element={<Welcomee />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/main" element={<Main />} />   
        </Routes>
      <Footer/>
    </Router>   

    </>
  )
}

export default Home