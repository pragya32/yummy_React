import React, { useEffect } from "react";
import "./App.css";
const App = () => {
  const APP_ID = "5c4cbbbf";
  const APP_KEY = "74de8b23ec4cd6c8d7f53c9d6e932b31";

  const [recipies, setRecipies] = useState([]);

  useEffect(() => {
    getRecepies();
  }, []);

  const getRecepies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipies(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
