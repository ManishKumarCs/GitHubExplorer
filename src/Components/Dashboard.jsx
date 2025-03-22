import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (search.trim()) {
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [search]);

  async function fetchSuggestions() {
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${search}&per_page=5`
      );
      setSuggestions(response.data.items);
      setShowSuggestions(true);
    } catch (err) {
      console.error("Error fetching suggestions", err);
    }
  }

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  async function fetchUsers(currentPage = 1) {
    if (!search.trim()) {
      setError("Please enter a username");
      return;
    }

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${search}&page=${currentPage}&per_page=10`
      );
      setData(response.data.items);
      setTotalPages(Math.ceil(response.data.total_count / 10)); // Approximate total pages
      setPage(currentPage);
    } catch (err) {
      setError("No users found or API rate limit exceeded.");
    } finally {
      setLoading(false);
    }
  }

  function handleClick() {
    fetchUsers(1);
    setShowSuggestions(false); // Hide suggestions after search
  }

  function handleClearSearch() {
    setSearch("");
    setData(null);
    setSuggestions([]);
    setShowSuggestions(false);
  }

  function handlePageChange(newPage) {
    if (newPage > 0 && newPage <= totalPages) {
      fetchUsers(newPage);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 transition">
      <div className="flex flex-col justify-center items-center p-8 max-w-6xl mx-auto">
        <img
          src="https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png"
          className="w-40 lg:w-48"
          alt="GitHub Logo"
        />

        <div className="relative flex gap-4 flex-wrap mt-8">
          <input
            className="border border-gray-300 p-3 rounded w-72 lg:w-96 font-serif shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            type="search"
            onChange={handleSearch}
            placeholder="Enter GitHub Username"
            value={search}
          />
          <button
            onClick={handleClick}
            className="border border-black p-3 rounded bg-white hover:bg-gray-100 font-serif shadow-sm transition"
          >
            {loading ? "Loading..." : "Search Profile"}
          </button>
          <button
            onClick={handleClearSearch}
            className="border border-black p-3 rounded bg-white hover:bg-gray-100 font-serif shadow-sm transition"
          >
            Clear
          </button>

          {showSuggestions && search && (
            <div className="absolute top-full left-0 right-0 bg-white border mt-2 shadow-lg z-10">
              <ul className="p-2 max-h-60 overflow-y-auto">
                {suggestions.map((user) => (
                  <li
                    key={user.id}
                    className="cursor-pointer p-2 hover:bg-gray-200"
                    onClick={() => setSearch(user.login)}
                  >
                    {user.login}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {error && <div className="text-red-500 font-semibold mt-4">{error}</div>}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          {data && data.map((user) => <Card key={user.id} data={user} />)}
        </div>

        {/* Pagination Controls */}
        {data && (
          <div className="flex gap-4 mt-6">
            <button
              disabled={page === 1}
              onClick={() => handlePageChange(page - 1)}
              className={`border p-3 rounded ${page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-white hover:bg-gray-100"} font-serif shadow-sm transition`}
            >
              Previous
            </button>
            <span className="font-semibold text-lg">{page} / {totalPages}</span>
            <button
              disabled={page === totalPages}
              onClick={() => handlePageChange(page + 1)}
              className={`border p-3 rounded ${page === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-white hover:bg-gray-100"} font-serif shadow-sm transition`}
            >
              Next
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-16 py-2">
        {/* Compare Profiles Card */}
        <div className="p-6 border rounded-lg shadow-md w-80 text-center bg-gray-100">
          <img src="https://cdn-icons-png.flaticon.com/512/3178/3178286.png" className="w-16 mx-auto mb-4" alt="Compare Icon" />
          <h2 className="text-xl font-bold">Compare GitHub Profiles</h2>
          <p className="text-gray-600 mt-2">Compare two GitHub users based on followers, repositories, and contributions.</p>
          <button onClick={() => navigate("/compare")} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Compare Now
          </button>
        </div>

        {/* Top Profiles Card */}
        <div className="p-6 border rounded-lg shadow-md w-80 text-center bg-gray-100">
          <img src="https://cdn-icons-png.flaticon.com/512/3178/3178281.png" className="w-16 mx-auto mb-4" alt="Top Profiles Icon" />
          <h2 className="text-xl font-bold">Top GitHub Profiles</h2>
          <p className="text-gray-600 mt-2">Explore the most followed GitHub users worldwide or filter by country.</p>
          <button onClick={() => navigate("/top-profiles")} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            View Profiles
          </button>
        </div>

        {/* Other Cards */}
        <div className="p-6 border rounded-lg shadow-md w-80 text-center bg-gray-100">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            className="w-16 mx-auto mb-4"
            alt="Find GitHub Users Icon"
          />
          <h2 className="text-xl font-bold">Find GitHub Users by Language</h2>
          <p className="text-gray-600 mt-2">Discover developers using specific programming languages.</p>
          <button
            onClick={() => navigate("/find-github-users")}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition"
          >
            Find Users
          </button>
        </div>

        <div className="p-6 border rounded-lg shadow-md w-80 text-center bg-gray-100">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            className="w-16 mx-auto mb-4"
            alt="Open Source Icon"
          />
          <h2 className="text-xl font-bold">Open Source Collaboration</h2>
          <p className="text-gray-600 mt-2">Find open-source projects that match your skills and interests.</p>
          <button
            onClick={() => navigate("/open-source-match")}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-purple-600 transition"
          >
            Discover Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
