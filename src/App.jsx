import { Routes, Route, Link } from 'react-router-dom'

import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
import Blogs from './pages/Blogs.jsx'

// Blogs
import BlogPosts from './pages/BlogPosts.jsx';

import profilePicture from './assets/avatar.png'

import Example1 from './example/example1.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home pfp={profilePicture}/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/projects" element={<Projects />}/>
        // Blogs
        <Route path="/blogs/:slug" element={<BlogPosts />} />
      </Routes>
    </>
  )
}

export default App
