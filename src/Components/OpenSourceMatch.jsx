import React, { useState, useEffect } from "react";

function OpenSourceMatch() {
  const [repositories, setRepositories] = useState([]);
  const [language, setLanguage] = useState("JavaScript");

  useEffect(() => {
    fetchRepos();
  }, [language]);

  async function fetchRepos() {
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=language:${language}+topic:good-first-issues&sort=stars&order=desc`
      );
      const data = await response.json();
      setRepositories(data.items || []);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Find Open Source Projects</h2>
      <div className="flex justify-center space-x-4 mb-6">
        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C++">C++</option>
          <option value="Go">Go</option>
        </select>
      </div>
      
      <div className="grid gap-6 md:grid-cols-4">
        {repositories.length > 0 ? (
          repositories.map((repo) => (
            <div key={repo.id} className="p-4 border rounded-lg shadow-md bg-white">
              <h3 className="text-lg font-semibold">{repo.name}</h3>
              <p className="text-sm text-gray-600">{repo.description || "No description available"}</p>
              <a 
  href={repo.html_url} 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition">
    View Repository
  </button>
</a>

            </div>
          ))
        ) : (
          <p className="text-center">No repositories found. Try a different language.</p>
        )}
      </div>
    </div>
  );
}

export default OpenSourceMatch;
