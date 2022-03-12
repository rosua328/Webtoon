import './App.css';
import Home from './Page/home';
import SelectWebtoon from './Page/selectWebtoon';
import Webtoon from './Page/webtoon';
import {BrowserRouter, Routes, Route}from "react-router-dom";

function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/:main?tab" element={<Home />} />
      <Route path="/a" element={<Home />} />
      <Route path="/select/:webtoonTitle" element={<SelectWebtoon />} />
      <Route path="/webtoon/:id" element={<Webtoon />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
