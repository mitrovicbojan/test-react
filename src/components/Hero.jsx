import "./Hero.css";
import { useState, useEffect } from "react";
import { SLIDES } from "../data";

export default function Hero() {
  const [slides, setSlides] = useState(SLIDES);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = slides.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  });

  return (
    <section>
      {slides.map((slide, slideIndex) => {
        const { id, image, title, description } = slide;
        let position = "nextSlide";
        if (slideIndex === index) {
          position = "activeSlide";
        }

        if (
          slideIndex === index - 1 ||
          (index === 0 && slideIndex === slides.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <article className={position} id={id}>
            <div className="img-box">
              <img src={image} className="header-img" alt="header-image" />
            </div>
            <div className="text-box">
              <h1 className="header-primary">{title}</h1>
              <p>{description}</p>
              <button class="arrow-button">Shop now</button>
              <div className="btn-div">
                <a className="prev" onClick={() => setIndex(index - 1)}></a>
                <a className="next" onClick={() => setIndex(index + 1)}></a>
              </div>
            </div>
          </article>
        );
      })}
    </section>

    // <div class="hero-box">
    //   <div class="img-box">
    //     <img class="header-img" />
    //   </div>

    //   <div class="text-box">
    //     <h1 class="header-primary">
    //       <span>Discover innovative</span>
    //       <span>ways to decorate</span>
    //     </h1>
    //     <p>
    //       We provide unmatched quality, comfort, and style for property owners
    //       across the country. Our experts combine form and function in bringing
    //       your vision to life. Create a room in your own style with our
    //       collection and make your property a reflection of you and what you
    //       love.
    //     </p>
    //     <button class="arrow-button">Shop now</button>
    //     <div class="btn-div">
    //       <a class="prev"></a>
    //       <a class="next"></a>
    //     </div>
    //   </div>
    // </div>
  );
}
