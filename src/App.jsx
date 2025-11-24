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
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About pfp={profilePicture}/>}/>
        <Route path="/blogs" element={<Blogs />}/>
      </Routes>
      <Header />
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <Card
          title="NixOS"
          description="This blog is about my experience with NixOS and how it was for me personally!"
          image={nixosImage}
          link="/blog/NixOS"
        />
        <Card
          title="Linux"
          description="This blog is about my experience with Linux and how it's been for me over the past year of usage!"
          image={linuxImage}
          link="/blog/Linux"
        />
        <Card
          title="Workflow"
          description="What's my workflow like? There's some interesting things iv'e done!"
          // image={workflowImage}
          link="/blog/Workflow"
        />
        <Example1 name="Mitch" description="I'm 19 years old and i like japan!" src={profilePicture} alt="PFP" />
      </div>
    </>
  )
}

export default App
