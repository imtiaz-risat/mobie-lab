import React, { useState } from "react";
import { useParams } from "react-router-dom";
import moviesData from "../data/movies.json";
import {
  getUserFromLocalStorage,
  updateUserMoviesInLocalStorage,
} from "../utils/localStorage";
import ReviewForm from "../components/ReviewForm";

const MovieDetail = () => {
  const { id } = useParams();
  const movie = moviesData.find((movie) => movie.id === parseInt(id));
  const [reviews, setReviews] = useState([]);
  const user = getUserFromLocalStorage();

  const handleAddReview = (review) => {
    setReviews([...reviews, review]);
  };

  const handleAddToList = (listType) => {
    updateUserMoviesInLocalStorage(listType, movie.id);
    alert(`Added to ${listType}`);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md max-w-3xl mx-auto">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-96 object-cover rounded mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-lg text-gray-700 mb-4">{movie.description}</p>

        {/* Buttons to add to lists */}
        <div className="mb-4">
          <button
            onClick={() => handleAddToList("watched")}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mr-2"
          >
            Add to Watched
          </button>
          <button
            onClick={() => handleAddToList("watching")}
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 mr-2"
          >
            Add to Watching
          </button>
          <button
            onClick={() => handleAddToList("wishlist")}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add to Wishlist
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-4">Leave a Review</h2>
        <ReviewForm onAddReview={handleAddReview} />

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Reviews</h3>
          {reviews.length > 0 ? (
            <ul className="space-y-4">
              {reviews.map((review, index) => (
                <li key={index} className="bg-gray-200 p-4 rounded shadow">
                  <p className="font-semibold">{review.username}</p>
                  <p>{review.comment}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
