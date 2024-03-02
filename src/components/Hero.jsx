import domeImg from "../assets/dome.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="section-hero">
      <div className="hero-intro">
        <h1 className="hero-title">React App</h1>
        <p className="hero-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque amet
          eaque repudiandae nihil nam deleniti, quaerat aperiam laborum
          pariatur, rem iusto fugiat ex, obcaecati quos sunt sint aspernatur
          exercitationem sed.
        </p>
      </div>

      <img src={domeImg} className="hero-img" alt="Dome Image"></img>
    </section>
  );
}
