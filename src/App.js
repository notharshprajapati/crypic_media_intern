import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Movies from "./pages/Movies";
import Description from "./pages/Description";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Movies />} />
        <Route path="/:id" element={<Description />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
