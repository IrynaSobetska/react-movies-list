import "./Film.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { BiHeartCircle } from "react-icons/bi";

const Film = ({ img, title, year }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="film-container">
      <div className="title">
        <h2>{title}</h2>
        <p>Year: {year}</p>
        <button onClick={toggleLike}>
          <BiHeartCircle className={liked ? "icon like" : "icon"} />
        </button>
      </div>
      <img src={img} alt={img} />
    </div>
  );
};

Film.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
};

export default Film;
