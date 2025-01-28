import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-gray-100">Welcome to Study Finder</h1>
      <nav className="flex gap-4 text-xl">
        <Link to="/search" className="hover:text-blue-400">
          Search
        </Link>
        <a href="#" className="hover:text-blue-400">Paths</a>
        <a href="#" className="hover:text-blue-400">Courses</a>
        <a href="#" className="hover:text-blue-400">Lessons</a>
        <a href="#" className="hover:text-blue-400">Playlist</a>
      </nav>
    </div>
  );
};

export default Home;
