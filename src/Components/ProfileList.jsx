import React, { useState, useEffect } from "react";
import { fetchGitHubUsersByLanguage } from "../utils/fetchGitHubUsers";
import ProfileCard from "./ProfileCard";
import LanguageFilter from "./LanguageFilter";

function ProfileList() {
  const [users, setUsers] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (selectedLanguage) {
        const data = await fetchGitHubUsersByLanguage(selectedLanguage);
        setUsers(data);
      }
    }
    fetchData();
  }, [selectedLanguage]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Find GitHub Users</h2>

      <LanguageFilter selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <ProfileCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default ProfileList;
