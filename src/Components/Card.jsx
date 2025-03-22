import React, { useState, useEffect } from 'react';
import { IoLogoGithub } from 'react-icons/io5';  
import { FaUsers, FaBookOpen, FaStar } from 'react-icons/fa';  
import axios from 'axios';

function Card({ data }) {
    const [userDetails, setUserDetails] = useState(null);
    const [repos, setRepos] = useState([]);

    // Fetch additional user details (followers, repos, bio)
    useEffect(() => {
        async function fetchDetails() {
            try {
                const userResponse = await axios.get(`https://api.github.com/users/${data.login}`);
                setUserDetails(userResponse.data);

                // Fetch user's latest 3 repositories
                const repoResponse = await axios.get(`https://api.github.com/users/${data.login}/repos?sort=updated&per_page=3`);
                setRepos(repoResponse.data);
            } catch (error) {
                console.error("Error fetching user details", error);
            }
        }
        fetchDetails();
    }, [data.login]);

    return (
        <div className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-white w-96 hover:shadow-xl transition">
            {/* Profile Image */}
            <img 
                src={data.avatar_url} 
                alt={`${data.login} profile`} 
                className="w-24 h-24 rounded-full border border-gray-300"
            />

            {/* Username */}
            <h1 className="font-bold text-xl mt-3">{data.login}</h1>
            <p className="text-gray-500">@{data.login}</p>

            {/* Bio (if available) */}
            {userDetails?.bio && (
                <p className="text-gray-700 text-sm text-center mt-2">{userDetails.bio}</p>
            )}

            {/* Followers & Repositories */}
            <div className="flex gap-4 mt-3 text-sm text-gray-600">
                <p className="flex items-center gap-1">
                    <FaUsers className="text-blue-500" /> {userDetails?.followers} Followers
                </p>
                <p className="flex items-center gap-1">
                    <FaBookOpen className="text-green-500" /> {userDetails?.public_repos} Repos
                </p>
            </div>

            {/* Latest Repositories */}
            {repos.length > 0 && (
                <div className="mt-4 w-full">
                    <h2 className="text-lg font-semibold mb-2">Latest Repositories</h2>
                    <ul className="space-y-2">
                        {repos.map((repo) => (
                            <li key={repo.id} className="bg-gray-100 p-2 rounded flex justify-between items-center">
                                <a 
                                    href={repo.html_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline truncate"
                                >
                                    {repo.name}
                                </a>
                                <span className="flex items-center gap-1 text-sm text-gray-600">
                                    <FaStar className="text-yellow-500" /> {repo.stargazers_count}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* GitHub Profile Button */}
            <a
                href={data.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition"
            >
                <IoLogoGithub className="text-xl" /> View Profile
            </a>

        </div>
    );
}

export default Card;
