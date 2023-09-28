import ReactDOM from "react-dom/client";
import Footer from "./footer/footer"
import Nav from "./nav/nav"
import Main from "./Main/Main"
import Courses from "./Courses/Courses"
import Blog from "./Blog/Blog"
import { BrowserRouter , Routes , Route } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <Nav />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="Courses" element={<Courses />} />
          <Route path="*" element={<Main />} />
        </Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);
export default Home