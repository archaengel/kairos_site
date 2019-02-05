import React from 'react';
// import { hot } from 'react-hot-loader/root';
import relative_numbers from '../assets/rel_num.png';

const Body = () => (
  <div>
    <div className="items-center w-screen my-8 sm:my-8 md:my-8 lg:my-12 flex justify-center flex-col">
      <article className="my-8 mx-20 sm:mx-32 sm:my-8 md:w-2/3 md:my-8 lg:w-1/2 lg:my-12">
        <h2 className="text-3xl mb-3 font-bold sm:text-3xl sm:mb-6 md:text-3xl md:mb-6 lg:text-4xl">
          we are
        </h2>     
        <p className="text-xl font-bold sm:text-2xl md:text-2xl lg:text-3xl font-mono">
          a set of artists, coders, and other mathematicians, operating out of Portland, OR, tutoring mathematics with a focus on intuition and comprehension
        </p>
      </article>
      <article className="my-8 mx-20 sm:mx-32 sm:my-8 md:w-2/3 md:my-8 lg:w-1/2 lg:my-12">
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
    <div className="my-20 sm:my-32 flex justify-center">
      <img className=" h-50 w-50 sm:h-64 sm:w-64 lg:w-70 lg:h-70 rot-45" src={relative_numbers} alt="equivalence classes of the product of the natural numbers"/>
    </div>
  </div>
);

// export default hot(Body);
export default Body;