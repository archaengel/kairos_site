import React from 'react';

import Header from './Header';
import Footer from './Footer';
import { charify } from './Promotional';
import transparentLogo from '../assets/logo_transparent.svg';


const Careers = () => (
  <div>
    <Header />
    <div className="container font-mono flex flex-row justify-between uppercase text-red text-2xl font-bold -mt-8 w-3/4 sm:text-4xl sm:text-5xl">
      { charify('careers') }
    </div>
    <div className="container flex flex-col justify-center w-3/5 my-8 sm:my-8 md:my-16">
      <article className="">
        <h2 className="mb-6 text-3xl sm:text-4xl sm:mb-6 md:mb-10 md:text-5xl">
         love <div className="inline-block text-red">math</div>?
        </h2>
        <p className="font-mono font-bold text-lg text-justify sm:text-2xl md:text-2xl">
          We are always looking for motivated individuals to work with. If you have something
          to contribute, don't hesitate to send your information to <a href="mailto:jobs@kairoscounselors.com">jobs@kairoscounselors.com</a>
        </p>
      </article>
      <img src={transparentLogo} className="container w-40 h-40 my-16 sm:w-50 sm:h-50 md:w-64 sm:my-16 md:h-64 md:my-8" alt="Kairos Academic Counselors logo."/>
    </div>
    <Footer />
  </div>
)

export default Careers;
