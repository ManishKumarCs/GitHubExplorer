import React from 'react'; 
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-3xl bg-white p-8 rounded shadow-lg">
            <h1 className="text-4xl font-bold text-center mb-6">About This App</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              This GitHub user search application allows you to quickly find information about GitHub users by simply typing a username. You can search for users with similar usernames and view their profiles, including their avatar, name, and a link to their full GitHub profile.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The project leverages GitHub's public API to retrieve user data and displays it in a clean and intuitive interface. The app is built with React for the frontend and Tailwind CSS for styling, ensuring a responsive and modern design.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Feel free to explore and find any GitHub user profile you're interested in !
            </p>
            <div className="bg-gray-100 p-6 rounded shadow-md mt-8">
              <h2 className="text-3xl font-bold text-center mb-4">Developer Info</h2>
              <div className="flex items-center justify-center">
                <img
                  src="https://avatars.githubusercontent.com/u/165541196?v=4"
                  alt="Developer"
                  className="w-24 h-24 rounded-full mr-4"
                />
                <div className="text-left">
                  <h3 className="text-xl font-semibold">Manish Kumar</h3>
                  <p className="text-gray-600">Frontend Developer</p>
                  <p className="text-gray-600">Email: mp2448445@gmail.com</p>
                 
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <Link
                to="/"
                className="text-blue-500 hover:underline text-xl font-semibold"
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
