import React from 'react'; 
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-4xl bg-white p-8 rounded-lg shadow-xl transition-transform transform duration-300">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">About This App</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            This GitHub user search application allows you to quickly find information about GitHub users by simply typing a username. You can search for users with similar usernames and view their profiles, including their avatar, name, and a link to their full GitHub profile.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The project leverages GitHub's public API to retrieve user data and displays it in a clean and intuitive interface. The app is built with React for the frontend and Tailwind CSS for styling, ensuring a responsive and modern design.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Feel free to explore and find any GitHub user profile you're interested in!
          </p>

          {/* Developer Info Section */}
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-3xl font-semibold text-center text-gray-900 mb-4">Developer Info</h2>
            <div className="flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img
                src="https://avatars.githubusercontent.com/u/165541196?v=4"
                alt="Developer"
                className="w-28 h-28 rounded-full border-4 border-blue-500 transform transition-transform duration-300 hover:scale-110"
              />
              <div className="text-left ml-6">
                <h3 className="text-xl font-semibold text-gray-900">Manish Kumar</h3>
                <p className="text-gray-600">Frontend Developer</p>
                <p className="text-gray-600">Email: manishprajapati.cs1@gmail.com</p>
                <a
                  href="https://github.com/ManishKumarCs"
                  className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Go Back Link */}
          <div className="flex justify-center mt-8">
            <Link
              to="/"
              className="text-blue-500 hover:text-blue-700 hover:underline text-xl font-semibold transition-colors duration-300"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
