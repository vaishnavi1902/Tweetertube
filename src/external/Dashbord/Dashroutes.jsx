import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './Navbar';
import { Footerbar } from './Footerbar';
import Dashbord from './Dashbord';

export const Dashroutes = () => {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/dashbord" element={<Dashbord />} />
          {/* <Route path="/dashbord" element={<Dashbord />} /> */}
        </Routes>
        <Footerbar />
      </Router>
      </>
  )
}
