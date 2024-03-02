import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import { CORE_CONCEPTS } from "./data.js";
import TabBtn from "./components/TabBtn.jsx";

const greeting = ["Hello", "Hi", "Greetings"];

function sayHello(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const greet = greeting[sayHello(2)];
  return (
    <nav className="nav-bar">
      <img className="logo" src={logo} alt="React logo"></img>
      <p className="hello-text">{greet}, Guest</p>
      <ul className="list">
        <li>
          <a href="#">Test 1</a>
        </li>
        <li>
          <a href="#">Test 2</a>
        </li>
        <li>
          <a href="#">Test 3</a>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <section>
        <h3 className="features-main-title">Features</h3>
        <ul className="feature-items">
          <Features {...CORE_CONCEPTS[0]} />
          <Features {...CORE_CONCEPTS[1]} />
          <Features {...CORE_CONCEPTS[2]} />
          <Features {...CORE_CONCEPTS[3]} />
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu id="menu">
          <TabBtn>Component</TabBtn>
          <TabBtn>JSX</TabBtn>
          <TabBtn>Props</TabBtn>
          <TabBtn>State</TabBtn>
        </menu>
      </section>
    </div>
  );
}

export default App;
