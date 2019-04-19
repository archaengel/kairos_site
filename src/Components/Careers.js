import React from 'react';

import Header from './Header';
import Footer from './Footer';
import { charify } from './Promotional';
import relative_numbers from '../assets/rel_num.png';


const Careers = () => (
  <div>
    <Header />
    <div className="container font-mono flex flex-row justify-between uppercase text-red text-2xl font-bold -mt-8 w-3/4 sm:text-4xl sm:text-5xl">
      { charify('careers') }
    </div>
    <div className="container flex flex-col justify-center my-8 sm:my-8 md:my-16">
      <article className="mx-4">
        <h2 className="mb-6 text-3xl sm:text-4xl sm:mb-6 md:mb-10 md:text-5xl">
         love <span className="text-red">math</span>?
        </h2>
        <p className="font-mono font-bold text-lg sm:text-2xl md:text-2xl">
          We are always looking for motivated individuals to work with. If you have something
          to contribute, don't hesitate to send your information to <a href="mailto:jobs@kairoscounselors.com">jobs@kairoscounselors.com</a>
        </p>
      </article>
      <img className="container h-40 w-40 my-10 sm:h-64 sm:w-64 sm:my-24 lg:w-70 lg:h-70 rot-45" src={relative_numbers} alt="equivalence classes of the product of the natural numbers"/>
    </div>
    <Footer />
  </div>
)

export default Careers;
