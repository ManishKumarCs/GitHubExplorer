import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TopProfiles() {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const countries = ["India", "United States", "United Kingdom", "Germany", "Canada", "France", "Japan"];

  useEffect(() => {
    async function fetchProfiles() {
      try {
        let allProfiles = [];

        for (const country of countries) {
          const response = await axios.get(
            `https://api.github.com/search/users?q=location:${country}&sort=followers&order=desc&per_page=10`
          );

          const profilesWithCountry = response.data.items.map((profile) => ({
            ...profile,
            country,
          }));

          allProfiles = [...allProfiles, ...profilesWithCountry];
        }

        setProfiles(allProfiles);
        setFilteredProfiles(allProfiles);
      } catch {
        setError("Failed to fetch profiles.");
      }
    }

    fetchProfiles();
  }, []);

  // Filter profiles based on the selected country
  function handleFilterChange(event) {
    const country = event.target.value;
    setSelectedCountry(country);

    if (country === "All") {
      setFilteredProfiles(profiles);
    } else {
      setFilteredProfiles(profiles.filter((profile) => profile.country === country));
    }
  }

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Top GitHub Profiles</h1>
      {error && <div className="text-red-500">{error}</div>}

      <button onClick={() => navigate("/")} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Back to Dashboard
      </button>

      {/* Country Filter Dropdown */}
      <select value={selectedCountry} onChange={handleFilterChange} className="border p-2 rounded mb-4">
        <option value="All">All Countries</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      {/* Display filtered profiles */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {filteredProfiles.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow-md text-center w-64">
            <img src={user.avatar_url} className="w-24 rounded-full mx-auto" alt="Avatar" />
            <h3 className="text-xl font-bold mt-2">{user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopProfiles;
