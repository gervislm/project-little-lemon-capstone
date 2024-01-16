import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../images/restaurant-food.jpg";

export const Header = () => {
  return (
    <header className="header">
      <section>
        {/* banner texts */}
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          {/* <Link></Link> */}
          <button aria-label="On Click">Reserve a Table</button>
        </div>

        {/* banner texts */}
        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </section>
    </header>
  );
};
