import React, { useState, useEffect } from "react";
import { authService } from "../fbase";
import { GlobalStyle, MediaDiv } from "../styles/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Write from "../routes/Write";
import WriteSuccess from "../routes/WriteSuccess";
import Navigation from "./Navigation";
import Auth from "../routes/Auth";
import Signup from "../routes/Signup";
import Start from "../routes/Start";
import Question from "../routes/Question";
import Post from "src/routes/Post";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
  const [userObj, setUserObj]: any = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user: any) => {
      if (user) {
        setIsLoggedIn(user);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <MediaDiv>
        <Router>
          <Routes>
            {/* {isLoggedIn && <Navigation />} */}
            isLoggedIn ? (
            <Route path="/home" element={<Home userObj={userObj} />} />
            <Route path="/write" element={<Write userObj={userObj} />} />
            <Route path="/writesuccess" element={<WriteSuccess />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/question/:id" element={<Question />}></Route>
            <Route path="/post" element={<Post />}></Route>
            ) : (
            <Route path="/" element={<Start />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<Signup />} />)
          </Routes>
        </Router>

        {/* {init ? (
          <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
        ) : (
          "init.."
        )} */}
      </MediaDiv>
    </>
  );
}

export default App;
