import React from "react";
import CustomRoute from "./routes/CustomRoute";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CustomRoute />
    </BrowserRouter>
  );
}

export default App;
