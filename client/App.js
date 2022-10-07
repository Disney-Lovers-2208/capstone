import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import Profile from "./components/Profile";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";
import { me, logout } from "./store";
import Navbar from "./components/Navbar";

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
      <Navbar handleClick={handleClick} isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path="/signup" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={<AuthForm />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/signup" element={<AuthForm />} />
          <Route path="/home" element={<AuthForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
