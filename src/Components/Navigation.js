import React from 'react';
// import { hot } from 'react-hot-loader/root';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return(
    <nav className="w-screen flex justify-center">
      <Link to="/" className="m-1 text-base sm:m-1 md:m-1 sm:text-xl md:text-xl lg:text-3xl lg:m-3 text-center text-blue font-mono">Home</Link>
      <Link to="/about" className="m-1 text-base sm:m-1 md:m-1 sm:text-xl md:text-xl lg:text-3xl lg:m-3 text-center text-blue font-mono">About</Link>
      <Link to="/promotional" className="m-1 sm:m-1 text-base md:m-1 sm:text-xl md:text-xl lg:text-3xl lg:m-3 text-center text-blue font-mono">Promotional</Link>
      <Link to="/contact" className="m-1 text-base sm:m-1 md:m-1 sm:text-xl md:text-xl lg:text-3xl lg:m-3 text-center text-blue font-mono">Contact</Link>
      <Link to="/careers" className="m-1 text-base sm:m-1 md:m-1 sm:text-xl md:text-xl lg:text-3xl lg:m-3 text-center text-blue font-mono">Careers</Link>
    </nav>
  )
};

// export default hot(Navigation);
export default Navigation;