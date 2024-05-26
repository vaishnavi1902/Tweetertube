import Welcomee from "./welcome/Welcomee";
// import Nav from ".//nav/Nav";
import Courses from "./Courses/Courses";
import Blog from "./Blog/Blog";
import Contact from "./contact/Contact";
import Instructor from "./instructor/Instructor";
// import Footer from "./footer/Footer";
import Login from "./login/Login";
import Register from "./login/Register";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Dashbord from "./Dashbord/Dashbord";
import { UserContextProvider } from '../context/UserContext';
import Dashbord from "./Dashbord/Dashbord";
import Mycourses from "./Dashbord/Mycourses";
import Video from "./videos/video";
import Getvideobyid from "./videos/getvideobyid"
import Account from "./Dashbord/Account";
import App from "./videos/videouplod";
import UpdateVideoForm from "./videos/UpdateVideoForm";
import UpdateCoverImageForm from "./Dashbord/updateaccount/UpdateCoverImageForm"
import UpdateAvatarForm from "./Dashbord/updateaccount/UpdateAvatarForm";
import UpdateAccountForm from "./Dashbord/updateaccount/UpdateAccountForm";
import ChangePasswordForm from './Dashbord/updateaccount/ChangePasswordForm'
import UserChannelProfile from "./videos/UserChannelProfile";
import UserChannelProfile1 from "./Dashbord/tweeter/UserChannelProfile1";
import Tweets from "./Dashbord/tweeter/Tweets";
import UpdateTweet from "./Dashbord/tweeter/UpdateTweet";
import GetUserTweets from "./Dashbord/tweeter/GetUserTweets";
import CreateTweet from "./Dashbord/tweeter/CreateTweet";
import Subscribers from "./subscriber/Subscribers";
import Subscriptions from "./subscriber/Subscriptions";
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
          <Route path="/videos" element={<Video/>}/>
          <Route path="/acc" element={<Account/>}/>
          <Route path="/getvideos" element={<Getvideobyid/>}/>
          <Route path="/uploadvideo" element={<App/>}/>
          <Route path="/updatevideo/:videoId" element={<UpdateVideoForm/>}/>
          <Route path="/updatecover" element={<UpdateCoverImageForm/>}/>
          <Route path="/updateavatar" element={<UpdateAvatarForm/>}/>
          <Route path="/updateaccount" element={<UpdateAccountForm/>}/>
          <Route path="/changepass" element={<ChangePasswordForm/>}/>
          <Route path="/userprofile/:username" element={<UserChannelProfile/>} />
          <Route path="/userprofile1/:username" element={<UserChannelProfile1/>} />
          <Route path="/tweets" element={<Tweets/>}/>
          <Route path="/updatetweet/:tweetId" element={<UpdateTweet/>}/>
          <Route path="/getusertweets/" element={<GetUserTweets/>}/>
          <Route path="/createtweet" element={<CreateTweet/>}/>
          <Route path="/mysubscribers" element={<Subscribers/>}/>
          <Route path="/subscriptions" element={<Subscriptions/>}/>
        </Routes>
      </Router>
    </UserContextProvider>

  );
};

export default Home;
