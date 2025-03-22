import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="flex space-x-6">
          <a href="https://github.com/ManishKumarCs" target="_blank" className="hover:text-blue-400 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-7 h-7"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.374.5 0 5.874 0 12.5c0 5.292 3.438 9.777 8.207 11.375.6.112.793-.261.793-.578 0-.285-.011-1.04-.017-2.04-3.338.728-4.042-1.61-4.042-1.61-.547-1.39-1.333-1.76-1.333-1.76-1.09-.745.083-.729.083-.729 1.204.084 1.838 1.236 1.838 1.236 1.07 1.834 2.806 1.305 3.492.997.108-.774.418-1.305.762-1.605-2.665-.303-5.466-1.333-5.466-5.931 0-1.31.467-2.381 1.236-3.221-.124-.303-.535-1.522.117-3.174 0 0 1.008-.322 3.303 1.23.957-.266 1.984-.399 3.003-.405 1.018.006 2.046.139 3.004.405 2.292-1.552 3.299-1.23 3.299-1.23.654 1.652.243 2.871.12 3.174.77.84 1.235 1.911 1.235 3.221 0 4.608-2.805 5.624-5.475 5.921.43.37.814 1.103.814 2.222 0 1.606-.015 2.902-.015 3.297 0 .319.19.695.8.578C20.566 22.274 24 17.794 24 12.5 24 5.874 18.626.5 12 .5z" />
            </svg>
          </a>
          <a href="#" className="hover:text-blue-400 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-7 h-7"
              viewBox="0 0 24 24"
            >
              <path d="M23.953 4.57c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.194-.897-.959-2.178-1.558-3.594-1.558-2.723 0-4.93 2.206-4.93 4.927 0 .39.043.765.127 1.124C7.691 8.095 4.066 6.13 1.64 3.161c-.427.735-.666 1.584-.666 2.491 0 1.719.87 3.234 2.188 4.123-.806-.026-1.566-.248-2.228-.616v.061c0 2.403 1.709 4.411 3.978 4.868-.417.113-.855.173-1.309.173-.319 0-.63-.03-.935-.086.631 1.956 2.457 3.379 4.617 3.417-1.69 1.326-3.826 2.115-6.146 2.115-.398 0-.79-.023-1.175-.068 2.193 1.408 4.798 2.226 7.595 2.226 9.106 0 14.086-7.545 14.086-14.086 0-.213-.004-.426-.015-.637.965-.697 1.8-1.562 2.46-2.549z" />
            </svg>
          </a>
        </div>

        <div className="text-center text-sm mt-4 md:mt-0">
          <p>
            © 2024 All Rights Reserved.{" "}
            <span className="text-blue-400">GitHubExplorer</span>
          </p>
          <p className="mt-1">
            Made with <span className="text-red-500">❤️</span> by{" "}
            <span className="font-semibold text-white">Manish Kumar</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
