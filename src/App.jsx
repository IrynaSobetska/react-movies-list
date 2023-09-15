import { useState } from "react";
import "./App.css";
import data from "./film.json";

import FilmList from "./components/FilmList";
import Input from "./components/Input";

function App() {
  const [value, setValue] = useState("");

  const filmsData = data.filter((film) =>
    film.Title.toLowerCase().includes(value)
  );

  return (
    <>
      <h1>Movies list</h1>
      <Input setValue={setValue} />
      <FilmList data={filmsData} />
    </>
  );
}

export default App;
