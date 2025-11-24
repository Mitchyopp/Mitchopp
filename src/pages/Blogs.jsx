import './Blogs.css'
import Card from '../components/Card.jsx';
import nixosImage from '../assets/NixOS.png';
import linuxImage from '../assets/Linux.png';

function Blogs() {
  return (
    <>
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <Card
          title="NixOS"
          description="This blog is about my experience with NixOS and how it was for me personally!"
          image={nixosImage}
          link="/blogs/NixOS"
        />
        <Card
          title="Linux"
          description="This blog is about my experience with Linux and how it's been for me over the past year of usage!"
          image={linuxImage}
          link="/blogs/Linux"
        />
        <Card
          title="Workflow"
          description="What's my workflow like? There's some interesting things iv'e done!"
          // image={workflowImage}
          link="/blogs/Workflow"
        />
        <Card
          title="Colourschemes"
          description="My experience of trying to make a colourscheme that works well for me!"
          link="/blogs/Colourschemes"
        />
      </div>
    </>
  )
}

export default Blogs
