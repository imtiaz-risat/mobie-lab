import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import { getUserFromLocalStorage } from "../utils/localStorage";
import moviesData from "../data/movies.json"; // Load movies from JSON

const Home = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (user && user.tags.length > 0) {
      const userTags = user.tags;
      const filtered = moviesData.filter((movie) =>
        movie.tags.some((tag) => userTags.includes(tag))
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(moviesData); // If no tags selected, show all movies
    }
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-6">
        Movies Based on Your Preferences
      </h1>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default Home;
