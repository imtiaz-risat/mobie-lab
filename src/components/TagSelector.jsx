import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUserTagsInLocalStorage } from "../utils/localStorage";

const tagsList = [
  "Action",
  "Drama",
  "Comedy",
  "Horror",
  "Romance",
  "Sci-Fi",
  "Thriller",
];

const TagSelector = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const navigate = useNavigate();

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = () => {
    updateUserTagsInLocalStorage(selectedTags);
    navigate("/"); // After selecting tags, navigate to the home page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Select Your Favorite Tags
        </h2>
        <div className="flex flex-wrap mb-4">
          {tagsList.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`m-2 px-4 py-2 rounded-full border ${
                selectedTags.includes(tag)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              } hover:bg-blue-300`}
            >
              {tag}
            </button>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Save Tags and Continue
        </button>
      </div>
    </div>
  );
};

export default TagSelector;
