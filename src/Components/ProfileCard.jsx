import React from "react";

function ProfileCard({ user }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mx-auto" />
      <h3 className="text-lg font-semibold mt-2 text-center">{user.login}</h3>
      <p className="text-sm text-gray-600 text-center">{user.bio || "No bio available"}</p>

      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-3 text-blue-500 hover:underline text-center"
      >
        View Profile
      </a>
    </div>
  );
}

export default ProfileCard;
