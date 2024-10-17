import { useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Header from './Header';

function Dashboard() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);  
  const [error, setError] = useState(null); 
  
  function handleSearch(event) {
    setSearch(event.target.value);
  }
  
  function handleClick() {
    if (search) {
      axios
        .get(`https://api.github.com/search/users?q=${search}`)
        .then((response) => {
          setData(response.data.items);
          setError(null);             
        })
        .catch((err) => {
          setError("No users found");  
          setData(null);         
        });
    } else {
      setError("Please enter a username"); 
    }
  }
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  function handleClear(){
    setSearch("");
    setData(null);
  }

  return (
    <>
        <div className="flex flex-col justify-center items-center p-8 max-w-6xl mx-auto">
          <img
            src="https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png"
            className="w-40 lg:w-48"
            alt="GitHub Logo"
          />
          <div className="flex gap-4 flex-wrap mt-8">
            <input
              className="border border-gray-300 p-3 rounded w-72 lg:w-96 font-serif shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              type="search"
              onChange={handleSearch}
              onKeyDown={handleKeyDown}
              placeholder="Enter your GitHub Username"
              value={search} 
            />
            <button
              onClick={handleClick}
              className="border border-black p-3 rounded bg-white hover:bg-gray-100 font-serif shadow-sm transition"
            >
              Search Profile
            </button>
            {search && <button
              onClick={handleClear}
              className="border border-black p-3 rounded bg-white hover:bg-gray-100 font-serif shadow-sm transition"
            >
              Clear
            </button>}
          </div>
          {error && <div className="text-red-500 font-semibold mt-4">{error}</div>}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10'>
            {data && data.map((user) => <Card key={user.id} data={user} />)}
          </div>
        </div>
    </>
  );
}

export default Dashboard;
