import { motion } from "framer-motion";

const Movie = ({ item }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <h2>{item.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path}
        alt=""
      />
    </motion.div>
  );
};

export default Movie;
