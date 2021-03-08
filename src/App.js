import "./App.css";
import studioimage from "./images/Studio 2.jpeg";

function App() {
  return (
    <div className="App">
      <div class="landing">
        <div class="img-wrapper">
          <img src={studioimage} alt="" class="landing-img" />
          <span class="main-title">Mad Philosophies</span>
        </div>
      </div>
      <div class="about">
        <div class="about-section">
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
      </div>
    </div>
  );
}

export default App;
