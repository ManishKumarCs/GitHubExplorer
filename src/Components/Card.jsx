import React from 'react';

function Card({ data }) {
    return (
      <>
        <div className="flex justify-center mt-8 p-4 rounded shadow-lg bg-white w-96">
          <div className="w-24 flex justify-center items-center">
            <img src={data.avatar_url} alt="User Image" className="w-24 rounded-full" />
          </div>
          <div className="ml-8 text-xl flex flex-col gap-2 font-serif">
            <h1 className="font-bold">{data.login}</h1>
            <p className="text-gray-600">@{data.login}</p>
            <a
              href={data.html_url}
              target="_blank"
              className="mt-4 hover:bg-blue-500 hover:text-white py-2 px-4 rounded border border-black hover:border-none transition"
            >
              Show Profile
            </a>
          </div>
        </div>
      </>
    );
  }
  
  export default Card;
  