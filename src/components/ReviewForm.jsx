import React, { useState } from "react";
import { getUserFromLocalStorage } from "../utils/localStorage";

const ReviewForm = ({ onAddReview }) => {
  const [comment, setComment] = useState("");
  const user = getUserFromLocalStorage();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === "") return;

    const review = {
      username: user.username,
      comment,
    };
    onAddReview(review);
    setComment(""); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-3 border rounded"
        rows="4"
        placeholder="Write your review here..."
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
