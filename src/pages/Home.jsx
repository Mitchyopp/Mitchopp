import { Link } from 'react-router-dom';
import './Home.css'

function Home({ pfp }) {
  return (
    <>
      <section class="about">
        <img src={pfp} alt="My profile picture" class="avatar" />
        <h1 class="about-title">About me!</h1>
        <p class="about-description">
          Hey! I'm <span class="name">Mitch</span>, I'm 19 and a massive tech nerd, i love Linux, Japanese and more.. Add some more stuff here later..
        </p>
        <p>Check out some of my <Link to="/projects">Projects</Link></p>
      </section>
    </>
  );
}

export default Home;
