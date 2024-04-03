import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./containers/Home";
import Activate from "./containers/Activate";
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm";
import ResetPassword from "./containers/ResetPassword";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirm />}
          />
          <Route path="/activate/:uid/:token" element={<Activate />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
