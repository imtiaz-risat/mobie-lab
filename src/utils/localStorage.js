export const updateUserTagsInLocalStorage = (tags) => {
  let user = getUserFromLocalStorage();
  if (user) {
    user.tags = tags;
    saveUserToLocalStorage(user);
  }
};

// Save new user profile to the users array in localStorage
export const saveUserToLocalStorage = (user) => {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users = users.filter((u) => u.username !== user.username); // Remove duplicate user
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(user)); // Set current user
};

// Fetch all users
export const getUsersFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("users")) || [];
};

// Fetch current user
export const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};

// Update user's watched, watching, or wishlist movies
export const updateUserMoviesInLocalStorage = (type, movieId) => {
  let user = getUserFromLocalStorage();
  if (!user) return;

  user[type].push(movieId);
  saveUserToLocalStorage(user);
};
