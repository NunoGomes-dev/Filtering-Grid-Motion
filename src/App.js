import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Filter, Movie } from "./components";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=f89f2bc908576314cf1dac2e98a91e14&language=en-US&page=1`
      );

      const { results } = data;
      setData([...results]);
      setMovies([...results]);
    };

    getMovies();
  }, []);

  useEffect(() => {
    if (filter === 0) {
      setMovies(data);
      return;
    }
    const filtered = data.filter((m) => m.genre_ids.includes(filter));
    setMovies(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <div className="App">
      <Filter filter={filter} setFilter={setFilter} />
      <motion.div layout className="grid-movies">
        <AnimatePresence>
          {movies.map((movie) => {
            return <Movie key={movie.id} item={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default App;
