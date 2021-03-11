import "./App.css";
import studioimage from "./images/Studio 2.jpeg";

function App() {
  return (
    <div className="App">
      {/* Hero */}
      <section class="hero">
        <div class="hero-content">
          <span class="main-title">Mad Philosophies</span>
        </div>
      </section>
      {/* About */}
      <section class="about">
        <div class="about-content">
          <span class="about-title">About</span>
          <p class="about-copy">
            Mad Philosophies is a multi-instrumentalist, composer, producer, and
            streamer, offering media composition and music production services
            with music experience for more than 15 years and proficiency in
            multiple audio production software programs.
          </p>
          <p class="about-copy">
            With an interest in an array of genres, Mad Philosophies is
            constantly innovating and re-inventing their style.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
