import logo from "../src/assets/images/logo.svg";
import "./App.css";
import Hero from "./components/Hero.jsx";

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

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <section></section>
    </div>
  );
}

export default App;
