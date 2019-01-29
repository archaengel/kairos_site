import React from 'react';
// import { hot } from 'react-hot-loader/root';

import Header from './Header';
import Footer from './Footer';
import { charify } from './Promotional';
import commDiag from '../assets/commutative_diagram.svg';

const Careers = () => (
  <div>
    <Header />
    <div className="container font-mono flex flex-row justify-between uppercase text-red text-2xl font-bold -mt-8 w-3/4 sm:text-4xl sm:text-5xl">
      { charify('careers') }
    </div>
    <div className="container flex flex-col justify-center w-3/5 my-8 sm:my-8 md:my-16">
      <article className="">
        <h2 className="mb-6 text-3xl sm:text-4xl sm:mb-6 md:mb-10 md:text-5xl">
         ∞ 
        </h2>
        <p className="font-mono font-bold text-lg text-justify sm:text-2xl md:text-2xl">
          We are always looking for passionate and motivated individuals to work with. 
          If you share our interest in the intersection of design, technology, mathematics,
          and effective and affective pedagogy don't 
          hesitate send us your info at <a href="mailto:jobs@kairoscounselors.com">jobs@kairoscounselors.com</a>
        </p>
      </article>
      <img src={commDiag} className="container rot-135 w-40 h-40 my-16 sm:w-50 sm:h-50 md:w-64 sm:my-16 md:h-64 md:my-8" alt="Category of objects X, Y, and Z, and morphisms f, g, f;g"/>
    </div>
    <Footer />
  </div>
)

// export default hot(Careers);
export default Careers;