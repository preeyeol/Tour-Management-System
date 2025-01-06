import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Hero from "./pages/Hero";

const App = () => {
  return (
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );
};

export default App;
