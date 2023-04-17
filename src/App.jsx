import React from "react";
import { Routes , Route } from "react-router-dom";
import CssDefinition from "./components/CssDefinition";
import HtmlDefinition from "./components/HtmlDefinition";
import JsDefinition from "./components/JsDefinition";
import Navbar from "./components/Navbar";

const App = () => {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/html" element={<HtmlDefinition />} />
          <Route path="/css" element={<CssDefinition />} />
          <Route path="/js" element={<JsDefinition />} />
        </Routes>
      </div>
  );
};

export default App;
