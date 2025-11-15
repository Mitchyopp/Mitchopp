import Card from './Card.jsx';
import Header from './Header.jsx'
import About from './About.jsx'
import profilePicture from './assets/avatar.png'
import nixosImage from './assets/NixOS.png';
import linuxImage from './assets/Linux.png';

function App() {
  return (
    <>
      <Header />
      <About pfp={profilePicture}/>
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
      </div>
    </>
  )
}

export default App
