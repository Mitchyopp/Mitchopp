import Card from './Card.jsx';
import nixosImage from './assets/NixOS.png';
import linuxImage from './assets/Linux.png';

function App() {
  return (
    <>
      <Card 
        title="NixOS" 
        description="This blog is about my experience with NixOS and how it was for me personally!" 
        image={nixosImage} 
        link="NixOS.jsx"
      />
      <Card
        title="Linux"
        description="This blog is about my experience with Linux and how it's been for me over the past year of usage!"
        image={linuxImage}
        link="Linux.jsx"
      />
    </>
  )
}

export default App
