import React from "react";
import { useState } from "react/cjs/react.development";
import { FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  const [slides] = useState([-1, 0, 1]); // default slides [-1, 0, 1]

  const renderSlideButton = (direction) => {
    const isLeft = direction === "left";
    return (
      <button>
        <FaChevronRight />
      </button>
    );
  };

  return (
    <div>
      {slides.map((slide, slideIdx) => (
        <div key={slideIdx}>
          <div>
            {/* overlay */}
            <div />
            <object data="" type="image/jpeg">
              <img src="" alt="" />
            </object>
          </div>
        </div>
      ))}
      <div>
        {renderSlideButton("left")}
        {renderSlideButton("right")}
      </div>
    </div>
  );
};

export default Carousel;
