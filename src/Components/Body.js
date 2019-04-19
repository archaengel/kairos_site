import React from 'react';
// import { hot } from 'react-hot-loader/root';
import transparentLogo from '../assets/logo_transparent.svg';

const Body = () => (
  <div>
    <div className="items-center w-screen my-8 sm:my-8 md:my-8 lg:my-12 flex justify-center flex-col">
      <article className="my-8 mx-4 sm:mx-32 sm:my-8 md:w-2/3 md:my-8 lg:w-1/2 lg:my-12">
        <h2 className="text-3xl mb-3 font-bold sm:text-3xl sm:mb-6 md:text-3xl md:mb-6 lg:text-4xl">
          we are
        </h2>     
        <p className="text-xl font-bold sm:text-2xl md:text-2xl lg:text-3xl font-mono">
          a set of artists, coders, and other mathematicians, operating out of Portland, OR, tutoring mathematics with a focus on intuition and comprehension
        </p>
      </article>
      <article className="my-8 mx-4 sm:mx-32 sm:my-8 md:w-2/3 md:my-8 lg:w-1/2 lg:my-12">
        <h2 className="text-3xl mb-3 font-bold sm:text-3xl sm:mb-6 md:text-3xl md:mb-6 lg:text-4xl">
          to get in touch
        </h2>     
        <p className="text-xl font-bold sm:text-2xl md:text-2xl lg:text-3xl font-mono">
          call, email & sms to set up a free phone consultation
        </p>
        <ul className="text-xl font-bold sm:text-2xl md:text-2xl lg:text-3xl font-mono">
          <li>email <a href="mailto:info@kairoscounselors.com">info@kairoscounselors</a></li>
          <li>sms & voice 681.321.1312</li>
        </ul>
      </article>
    </div>
    <div className="sm:my-32 flex justify-center">
      <img src={transparentLogo} className="container w-50 h-50 my-6 sm:w-50 sm:h-50 md:w-64 sm:my-6 md:h-64 md:my-8" alt="Kairos Academic Counselors logo."/>
    </div>
  </div>
);

// export default hot(Body);
export default Body;
