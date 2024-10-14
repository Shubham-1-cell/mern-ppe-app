import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the PPE Detection Service</h1>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/upload">Upload Video</Link>
    </div>
  );
}

export default HomePage;
