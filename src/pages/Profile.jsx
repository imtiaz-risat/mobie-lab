import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserFromLocalStorage } from "../utils/localStorage";
import moviesData from "../data/movies.json";
import MovieList from "../components/MovieList";

const Profile = () => {
  const { username } = useParams(); // Get username from URL
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const currentUser = getUserFromLocalStorage();

    // Check if viewing own profile
    if (currentUser.username === username) {
      setUserProfile(currentUser);
    } else {
      // Load other user profile (In this example, profiles are static from local storage)
      const otherUsers = JSON.parse(localStorage.getItem("users")) || [];
      const user = otherUsers.find((user) => user.username === username);
      setUserProfile(user);
    }
  }, [username]);

  if (!userProfile) {
    return <p className="text-center">User profile not found</p>;
  }

  const watchedMovies = moviesData.filter((movie) =>
    userProfile.watched.includes(movie.id)
  );
  const watchingMovies = moviesData.filter((movie) =>
    userProfile.watching.includes(movie.id)
  );
  const wishlistMovies = moviesData.filter((movie) =>
    userProfile.wishlist.includes(movie.id)
  );

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          {userProfile.username}'s Profile
        </h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Watched Movies</h2>
          <MovieList movies={watchedMovies} />
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Currently Watching</h2>
          <MovieList movies={watchingMovies} />
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Wishlist</h2>
          <MovieList movies={wishlistMovies} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
