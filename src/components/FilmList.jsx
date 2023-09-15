import "./FilmList.css";
import Film from "./Film";
import PropTypes from "prop-types";

const FilmList = ({ data }) => {
  return (
    <div className="movies-list">
      {data.map((film) => (
        <Film
          key={film.imdbID}
          img={film.Poster}
          title={film.Title}
          year={film.Year}
        />
      ))}
    </div>
  );
};

FilmList.propTypes = {
  data: PropTypes.array,
};

export default FilmList;
