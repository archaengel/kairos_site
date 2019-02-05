import React from 'react';
// import { hot } from 'react-hot-loader/root';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return(
    <nav className="w-screen flex justify-center">
      <Link to="/" className="m-2 text-lg sm:m-2 md:m-2 sm:text-xl md:text-xl lg:text-3xl lg:m-3 text-center text-blue font-mono">Home</Link>
      <Link to="/about" className="m-2 text-lg sm:m-2 md:m-2 sm:text-xl md:text-xl lg:text-3xl lg:m-3 text-center text-blue font-mono">About</Link>
      <Link to="/promotional" className="m-2 sm:m-2 text-lg md:m-2 sm:text-xl md:text-xl lg:text-3xl lg:m-3 text-center text-blue font-mono">Promotional</Link>
      <Link to="/contact" className="m-2 text-lg sm:m-2 md:m-2 sm:text-xl md:text-xl lg:text-3xl lg:m-3 text-center text-blue font-mono">Contact</Link>
      <Link to="/jobs" className="m-2 text-lg sm:m-2 md:m-2 sm:text-xl md:text-xl lg:text-3xl lg:m-3 text-center text-blue font-mono">Jobs</Link>
    </nav>
  )
};

// export default hot(Navigation);
export default Navigation;