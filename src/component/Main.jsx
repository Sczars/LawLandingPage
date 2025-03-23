import BaseSection from "./BaseSection";
import "../css/section.css"

import PropTypes from "prop-types";
import { useEffect } from "react";

export default function Main(props) {
  useEffect(() => {
    props.setSections(
      Array.from(document.querySelector("main").children).map(
        (item, index) => ({
          id: index + 1,
          name: item.className,
        })
      )
    );
  }, []);

  return (
    <main>
      <BaseSection className="hero" />
      <BaseSection className="reasons" />
      <BaseSection className="objectives" />
      <BaseSection className="services" />
      <BaseSection className="testimonial" />
    </main>
  );
}

Main.propTypes = {
  setSections: PropTypes.func.isRequired,
};
