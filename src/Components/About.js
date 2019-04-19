import React from 'react';
// import { hot } from 'react-hot-loader/root';
import Header from './Header';
import Footer from './Footer';

const About = () => (
  <div>
    <Header />
    <div className="items-center w-screen my-8 sm:my-8 md:my-8 lg:my-12 flex justify-center flex-col">
      <article className="m-4 sm:mx-32 sm:my-8 md:w-2/3 md:my-8 lg:w-1/2 lg:my-12">
        <h2 className="text-3xl mb-3 font-bold sm:text-3xl sm:mb-6 md:text-3xl md:mb-6 lg:text-4xl">
          we prefer <span className="text-blue">construction</span> over <span className="text-red">instruction</span>
        </h2>     
        <p className="text-xl font-bold my-4 sm:text-2xl md:text-2xl lg:text-3xl font-mono">
          The coaches at Kairos prioritize pupil-directed pedagogy.
        </p>
        <p className="text-xl font-bold my-4 sm:text-2xl md:text-2xl lg:text-3xl font-mono">
          Learners often encounter challenges with Mathematics when the learning process shifts
          from a focus on discovery to a reliance on memorization. Instead of attempting
          to <span className="text-red">instruct</span> pieces of discrete information for
          the student to store and recall later, our group of tutors collaborates with the student's own reasoning
          in order to <span className="text-blue">construct</span>, from the ground up,
          a permanent and robust foundation for discovery and exploration.
        </p>
        <p className="text-xl font-bold my-4 sm:text-2xl md:text-2xl lg:text-3xl font-mono">
          Mathematics ought not to be a series of esoteric procedures. It is a game
          that should be ours to enjoy.
        </p>
      </article>
      <article className="m-4 sm:mx-32 sm:my-8 md:w-2/3 md:my-8 lg:w-1/2 lg:my-12">
        <h2 className="text-3xl mb-3 font-bold sm:text-3xl sm:mb-6 md:text-3xl md:mb-6 lg:text-4xl">
          subjects
        </h2>     
        <p className="text-xl font-bold sm:text-2xl md:text-2xl lg:text-3xl font-mono">
          we are currently offering coaching for the following subjects:
        </p>
        <ul className="text-xl font-bold mt-4 sm:text-2xl md:text-2xl lg:text-3xl font-mono">
          <li>Algebra I</li>
          <li>Algebra II</li>
          <li>Geometry</li>
          <li>Trigonometry</li>
          <li>Pre-Calculus</li>
          <li>Calculus</li>
        </ul>
      </article>
    </div>
    <Footer />
  </div>
);

// export default hot(About);
export default About;
