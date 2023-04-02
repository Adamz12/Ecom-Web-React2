import { fireEvent } from "@testing-library/react";
import React from "react";
import Discounted from "./Discounted";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            Explore more <span className="purple">Books</span>
          </h2>
          <Link to="/books">
            <button className="btn">Explore Books</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Explore;
