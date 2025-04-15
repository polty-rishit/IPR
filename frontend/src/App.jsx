 

import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Patents from './pages/Patents';
import { Test } from './pages/Test';
import Search from './pages/Search';
 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patents" element={<Patents/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </Router>
  );
}

export default App;