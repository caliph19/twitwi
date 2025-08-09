import React, { useEffect, useState } from "react";
import styled from "styled-components";
import sliderimg1 from "../images/cardsection1.png";
import sliderimg2 from "../images/cardsection2.png";
import sliderimg3 from "../images/cardsection3.png";
import sliderimg4 from "../images/cardsection4.png";

const blogPosts = [
  {
    id: "01",
    sliderimage: sliderimg4,
  },
  {
    id: "02",
    sliderimage: sliderimg2,
  },
  {
    id: "03",
    sliderimage: sliderimg3,
  },
  {
    id: "04",
    sliderimage: sliderimg1,
  },
];

const StackWrapper = styled.div`
  width: 100%;
  height: 430px;
  position: relative;
  border-radius: 20px;

  overflow: hidden;
  background: transparent; /* make sure parent doesn't show any background */

      @media (min-width: 1024px) and (max-width: 1200px) {
    height: 360px;

  }
@media (min-width: 768px) and (max-width: 1023px) {
  height: 360px;
  width:100%;

}
@media (min-width: 425px) and (max-width: 768px) {
  height: 100%;
  width: 100%;
}
@media (min-width: 375px) and (max-width: 424px) {
  height:360px;
}

`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 450px;
  height: 100%;
  opacity: ${(props) => (props.active ? 1 : 0)};
  z-index: ${(props) => (props.active ? 2 : 1)};
  transition: opacity 2s ease-in-out;
  pointer-events: none;
    @media (min-width: 1024px) and (max-width: 1200px) {
    height: 360px;
  }
@media (min-width: 768px) and (max-width: 1023px) {
  height: 360px;
  width:100%;
}
@media (min-width: 425px) and (max-width: 768px) {
  height: 100%;
  width: 100%;
}
@media (min-width: 375px) and (max-width: 424px) {
  height:360px;
}
`;

const StackItem = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  background-color: white;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h2 {
      font-size: 24px;
      font-weight: bold;
      color: #333;
    }

    h4 {
      font-size: 18px;
      color: #555;
    }

    span {
      font-size: 16px;
      color: #939393;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    p {
      font-size: 0.85rem;
      color: #444;
      margin-top: auto;
    }
  }
`;

const BlogStackedCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % blogPosts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <StackWrapper>
      {blogPosts.map((blog, index) => (
        <Slide key={blog.id} active={index === activeIndex}>
          <StackItem>
            <img src={blog.sliderimage} alt={blog.title} />
            {/* <div className="content">
              <h2>{blog.title}</h2>
              <span>{blog.date}</span>
              <h4>{blog.author}</h4>
              <p>{blog.excerpt}</p>
            </div> */}
          </StackItem>
        </Slide>
      ))}
    </StackWrapper>
  );
};

export default BlogStackedCarousel;
