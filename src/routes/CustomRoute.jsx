import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import TodosPage from "../pages/TodosPage";
import TodoPage from "../pages/TodoPage";

function CustomRoute() {
  const { pathname } = useLocation();
  const navigation = useNavigate();

  const navi = useCallback(
    (token) => {
      if (token && ["/", "/auth"].includes(pathname)) {
        navigation("/todos");
      } else {
        navigation("/");
      }
    },
    [navigation, pathname]
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    navi(token);
  }, [navi]);

  return (
    <Routes>
      <Route path={"/"} element={<LoginPage />} />
      <Route path={"/auth"} element={<SignUpPage />} />
      <Route path={"/todos"} element={<TodosPage />}>
        <Route path={":id"} element={<TodoPage />} />
      </Route>
    </Routes>
  );
}

export default CustomRoute;
