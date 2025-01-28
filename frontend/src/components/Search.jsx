import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = async () => {
    if (query.trim()) {
      setRecentSearches([...recentSearches, query]);
      const response = await fetch(`http://localhost:4000/api/search?q=${query}`);
      const data = await response.json();
      console.log(data); // Handle search results here
    }
  };

  return (
    <div className="h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-gray-700 p-4">
        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search course, career, and songs"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-2 bg-gray-600 rounded text-white w-96"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {/* Options and Profile */}
        <div className="flex items-center space-x-6">
          <button className="hover:text-blue-400">Paths</button>
          <button className="hover:text-blue-400">Courses</button>
          <button className="hover:text-blue-400">Lessons</button>
          <button className="hover:text-blue-400">Playlist</button>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex h-full">
        {/* Left Half */}
        <div className="w-1/2 bg-gray-800 p-4">
          <div className="grid grid-cols-4 gap-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s" alt="Image1" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s" alt="Image2" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s" alt="Image3" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s" alt="Image4" />
          </div>

          {/* Categories */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 bg-gray-700 rounded">All</button>
              <button className="px-3 py-1 bg-gray-700 rounded">Completed</button>
              <button className="px-3 py-1 bg-gray-700 rounded">Ungrouped</button>
              <button className="px-3 py-1 bg-gray-700 rounded">Certificates</button>
              <button className="px-3 py-1 bg-gray-700 rounded">Mentor</button>
              <button className="px-3 py-1 bg-gray-700 rounded">Progress</button>
            </div>
          </div>

          {/* Recent Searches */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Recent Searches</h3>
            <ul className="space-y-2">
              {recentSearches.length > 0 ? (
                recentSearches.map((item, index) => (
                  <li key={index} className="text-gray-300">
                    {item}
                  </li>
                ))
              ) : (
                <li className="text-gray-400">No recent searches</li>
              )}
            </ul>
          </div>
        </div>

        {/* Right Half */}
        <div className="w-1/2 bg-gray-700 p-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Cards */}
            <div className="bg-gray-600 rounded shadow p-4 h-64">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s"
    alt="Study Guide"
    className="w-full h-40 object-cover rounded"
  />
  <h3 className="mt-4 text-center text-lg font-semibold">Study Guide</h3>
</div>

<div className="bg-gray-600 rounded shadow p-4 h-64">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s"
    alt="Study Guide"
    className="w-full h-40 object-cover rounded"
  />
  <h3 className="mt-4 text-center text-lg font-semibold">Study Guide</h3>
</div>

<div className="bg-gray-600 rounded shadow p-4 h-64">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s"
    alt="Study Guide"
    className="w-full h-40 object-cover rounded"
  />
  <h3 className="mt-4 text-center text-lg font-semibold">Study Guide</h3>
</div>

<div className="bg-gray-600 rounded shadow p-4 h-64">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s"
    alt="Study Guide"
    className="w-full h-40 object-cover rounded"
  />
  <h3 className="mt-4 text-center text-lg font-semibold">Study Guide</h3>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
