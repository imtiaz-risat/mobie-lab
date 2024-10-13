import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-white p-4 rounded shadow-md">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
          <p className="text-sm text-gray-600">{movie.genre}</p>
          <Link
            to={`/movie/${movie.id}`}
            className="text-blue-500 hover:underline"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
