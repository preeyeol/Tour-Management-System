import React from "react";
import { BrowserRouter } from "react-router-dom";

import Hero from "./pages/Hero";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Hero />
      </div>
    </BrowserRouter>
  );
};

export default App;
