import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselCaption,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import "./Intro.scss";

export interface Props {}

const items = [
  {
    src:
      "https://www.incimages.com/uploaded_files/image/1920x1080/getty_505125664_122507.jpg",
    altText: "Slide 1",
    caption: "Find Books for All Ages!",
  },
  {
    src:
      "https://images.wallpaperscraft.com/image/book_glasses_reading_135945_1920x1080.jpg",
    altText: "Slide 2",
    caption: "Books That Matter",
  },
  {
    src:
      "https://i.pinimg.com/originals/5a/cb/1f/5acb1fb16e1acc16e1613c2c6ccbe84f.jpg",
    altText: "Slide 3",
    caption: "Discover favorite books",
  },
];

export function Intro(props: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="intro"
      interval={8000}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {items.map((item) => {
        return (
          <CarouselItem
            className="intro__item position-relative"
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img
              className="intro__item__img"
              src={item.src}
              alt={item.altText}
            />
            <CarouselCaption
              className="intro__item__caption playfair"
              captionText={item.caption}
            />
            <Link to="/books">
              <button className="intro__item__btn position-absolute">
                DISCOVER YOUR NEXT BOOK
              </button>
            </Link>
          </CarouselItem>
        );
      })}
    </Carousel>
  );
}
