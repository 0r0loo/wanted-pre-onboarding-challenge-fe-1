import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

function CustomRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LoginPage />} />
        <Route path={"/auth"} element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default CustomRoute;
