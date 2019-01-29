import React from 'react';
// import { hot } from 'react-hot-loader/root';

const Header = () => (
  <header className="my-10 sm:my-10 md:my-10 lg:my-16 flex justify-center">
    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
      <h1>
        <a className="text-blue" href="https://en.wikipedia.org/wiki/Kairos" target="_blank_">
          [kairos]
        </a>
      </h1>
    </div>
    <div className="text-md sm:text-lg md:text-2xl lg:text-3xl flex flex-col">
      <h1 className="lg:mt-2">
        academic
      </h1>
      <h1>
        counselors   
      </h1>
    </div>
  </header>
)

// export default hot(Header);
export default Header;