import { useState } from "react";
import axios from "axios";

function CompareProfiles() {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [repos1, setRepos1] = useState([]);
  const [repos2, setRepos2] = useState([]);
  const [error, setError] = useState(null);

  async function fetchProfile(username, setData, setRepos) {
    try {
      const userResponse = await axios.get(`https://api.github.com/users/${username}`);
      setData(userResponse.data);
      
      const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos?sort=stars&per_page=3`);
      setRepos(reposResponse.data);
    } catch {
      setError(`User ${username} not found`);
    }
  }

  function handleCompare() {
    setError(null);
    if (user1 && user2) {
      fetchProfile(user1, setData1, setRepos1);
      fetchProfile(user2, setData2, setRepos2);
    } else {
      setError("Enter both GitHub usernames");
    }
  }

  function highlight(value1, value2) {
    return value1 > value2 ? "text-green-600" : value1 < value2 ? "text-red-600" : "text-black";
  }

  function generateSummary() {
    if (!data1 || !data2) return "";

    let summary = "Comparison Summary: ";
    
    if (data1.followers > data2.followers) {
      summary += `${data1.login} has more followers (${data1.followers}) than ${data2.login} (${data2.followers}). `;
    } else if (data1.followers < data2.followers) {
      summary += `${data2.login} has more followers (${data2.followers}) than ${data1.login} (${data1.followers}). `;
    } else {
      summary += `Both have the same number of followers (${data1.followers}). `;
    }

    if (data1.public_repos > data2.public_repos) {
      summary += `${data1.login} has more public repositories (${data1.public_repos}) than ${data2.login} (${data2.public_repos}). `;
    } else if (data1.public_repos < data2.public_repos) {
      summary += `${data2.login} has more public repositories (${data2.public_repos}) than ${data1.login} (${data1.public_repos}). `;
    } else {
      summary += `Both have the same number of public repositories (${data1.public_repos}). `;
    }

    return summary;
  }

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Compare GitHub Profiles</h1>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="GitHub Username 1"
          value={user1}
          onChange={(e) => setUser1(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="GitHub Username 2"
          value={user2}
          onChange={(e) => setUser2(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={handleCompare} className="bg-blue-500 text-white px-4 py-2 rounded">
          Compare
        </button>
      </div>
      {error && <div className="text-red-500">{error}</div>}

      <div className="grid grid-cols-2 gap-10 mt-6">
        {[data1, data2].map((data, index) => (
          data && (
            <div key={index} className="p-4 border-black rounded shadow-md w-64 text-center">
              <img src={data.avatar_url} className="w-24 rounded-full mx-auto" alt="Avatar" />
              <h2 className="text-xl font-bold mt-2">{data.login}</h2>
              <p className={highlight(data.followers, data1 && data2 && (index === 0 ? data2.followers : data1.followers))}>
                Followers: {data.followers}
              </p>
              <p className={highlight(data.following, data1 && data2 && (index === 0 ? data2.following : data1.following))}>
                Following: {data.following}
              </p>
              <p className={highlight(data.public_repos, data1 && data2 && (index === 0 ? data2.public_repos : data1.public_repos))}>
                Public Repos: {data.public_repos}
              </p>
              <h3 className="font-bold mt-4">Top Repositories:</h3>
              <ul>
                {(index === 0 ? repos1 : repos2).map((repo) => (
                  <li key={repo.id} className="mt-2">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                      {repo.name} ⭐ {repo.stargazers_count}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )
        ))}
      </div>

      {data1 && data2 && (
        <div className="mt-6 p-4 border-black rounded shadow-md w-full text-center">
          <h3 className="text-xl font-bold">Profile Summary</h3>
          <p className="mt-2">{generateSummary()}</p>
        </div>
      )}
    </div>
  );
}

export default CompareProfiles;
