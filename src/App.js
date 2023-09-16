import { Route, Routes } from "react-router-dom";

//axios
import axios from "axios"; 

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      {/* <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie} />
      <DefaultHOC path="/plays" exact component={Plays} /> */}
      <Routes>
        <Route
          path="*"
          element={<DefaultHOC component={HomePage} />} // Wrap your component with the HOC
        />
        <Route
          path="/movie/:id"
          element={<MovieHOC component={Movie} />} // Wrap your component with the HOC
        />
        <Route
          path="/plays"
          element={<DefaultHOC component={Plays} />} // Wrap your component with the HOC
        />
      </Routes>
    </>
  );
}
// / , /movie
export default App;
