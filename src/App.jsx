import { Routes, Route, Link } from 'react-router-dom'

import Card from './components/Card.jsx';
import Header from './components/Header.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import profilePicture from './assets/avatar.png'
import nixosImage from './assets/NixOS.png';
import linuxImage from './assets/Linux.png';

import Example1 from './example/example1.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About pfp={profilePicture}/>}/>
        <Route path="/blogs" element={<Blogs />}/>
      </Routes>
    </>
  )
}

export default App
