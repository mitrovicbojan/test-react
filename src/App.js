import logo from "../src/assets/images/logo.svg";
import "./App.css";
import Hero from "./components/Hero.jsx";
import darkImg from "../src/assets/images/image-about-dark.jpg";
import lightImg from "../src/assets/images/image-about-light.jpg";

function Header() {
  return (
    <header>
      <div className="logo">
        <img className="logoImg" src={logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="##" className="nav-link">
              home
            </a>
          </li>
          <li>
            <a href="##" className="nav-link">
              shop
            </a>
          </li>
          <li>
            <a href="##" className="nav-link">
              about
            </a>
          </li>
          <li>
            <a href="##" className="nav-link">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function About() {
  return (
    <div className="about">
      <div className="about-img-box">
        <img className="about-img" src={darkImg} />
      </div>
      <div className="about-box">
        <h1 className="header-about">About our furniture</h1>
        <p className="about-text">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className="about-img-box">
        <img className="about-img" src={lightImg} />
      </div>
    </div>
  );
}

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
    </main>
  );
}

export default App;
