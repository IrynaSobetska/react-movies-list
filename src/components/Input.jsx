import "./Input.css";
import { BiSearch } from "react-icons/bi";
import PropTypes from "prop-types";

const Input = ({ setValue }) => {
  const changeValue = (e) => {
    const val = e.target.value.toLowerCase();
    setValue(val);
  };

  return (
    <div className="input">
      <input onChange={(e) => changeValue(e)} type="text" />
      <p>
        <BiSearch />
      </p>
    </div>
  );
};

Input.propTypes = {
  setValue: PropTypes.func,
};

export default Input;
