import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import Profile from "./components/profile/Profile";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";
import { me, logout } from "./store";
import NavigationBar from "./components/NavigationBar";
import Friends from "./components/profile/Friends";

const App = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(me());
  }, []);

  const handleClick = () => {
    dispatch(logout(navigate));
  };

  return (
    <div>
      <NavigationBar handleClick={handleClick} isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path="/signup" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/friends" element={<Friends />} />
          <Route path="/recommendations" />
          <Route path="/books" />
          <Route path="/movies" />
          <Route path="/tvshows" />
          <Route path="/users" />
          <Route path="/searchfor" />
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={<AuthForm />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/signup" element={<AuthForm />} />
          <Route path="/home" element={<AuthForm />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
