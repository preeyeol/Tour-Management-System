import React from "react";
import { BrowserRouter } from "react-router-dom";

import Hero from "./pages/Hero";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Hero />
      </div>
    </BrowserRouter>
  );
};

export default App;
