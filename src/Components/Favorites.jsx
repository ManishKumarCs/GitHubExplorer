import React, { useState, useEffect } from "react";
import Card from "./Card";

function Favorites() {
  const [bookmarkedProfiles, setBookmarkedProfiles] = useState([]);

  useEffect(() => {
    const savedProfiles = JSON.parse(localStorage.getItem("bookmarkedProfiles")) || [];
    setBookmarkedProfiles(savedProfiles);
  }, []);

  function clearBookmarks() {
    localStorage.removeItem("bookmarkedProfiles");
    setBookmarkedProfiles([]);
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <h1 className="text-3xl font-bold text-center">⭐ Bookmarked Profiles ⭐</h1>

      {bookmarkedProfiles.length === 0 ? (
        <p className="text-center mt-4">No bookmarked profiles yet.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {bookmarkedProfiles.map((user) => (
            <Card key={user.id} data={user} />
          ))}
        </div>
      )}

      {bookmarkedProfiles.length > 0 && (
        <button
          onClick={clearBookmarks}
          className="block mx-auto mt-6 bg-red-500 text-white py-2 px-6 rounded shadow-lg hover:bg-red-600 transition"
        >
          Clear All Bookmarks
        </button>
      )}
    </div>
  );
}

export default Favorites;
