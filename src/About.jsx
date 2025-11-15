import './About.css'

function About({ pfp }) {
  return (
    <>
      <section class="about">
        <img src={pfp} alt="My profile picture" class="avatar" />
        <h1 class="about-title">About me!</h1>
        <p class="about-description">
          Hey! I'm <span class="name">Mitch</span>, I'm 19 and a massive tech nerd, i love Linux, Japanese and more.. Add some more stuff here later..
        </p>
      </section>
    </>
  );
}

export default About;
