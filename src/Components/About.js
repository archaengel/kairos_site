import React from 'react';
// import { hot } from 'react-hot-loader/root';
import Header from './Header';
import Footer from './Footer';

const About = () => (
  <div>
    <Header />
    <div className="items-center w-screen my-8 sm:my-8 md:my-8 lg:my-12 flex justify-center flex-col">
      <article className="my-8 mx-20 sm:mx-32 sm:my-8 md:w-2/3 md:my-8 lg:w-1/2 lg:my-12">
        <h2 className="text-3xl mb-3 font-bold sm:text-3xl sm:mb-6 md:text-3xl md:mb-6 lg:text-4xl">
          less <div className="inline-block text-red">instruction</div>, more <div className="inline-block text-blue">construction</div>
        </h2>     
        <p className="text-xl font-bold my-4 sm:text-2xl md:text-2xl lg:text-3xl font-mono">
          The coaches at Kairos offer pupil-directed pedagogy.
        </p>
        <p className="text-xl font-bold my-4 sm:text-2xl md:text-2xl lg:text-3xl font-mono">
          When students encounter challenges, it's often due to a focus on memorization
          as the main mechanism of mathemtical discovery. This is what gives the discipline its 
          reputation for rigor. We want to turn
          away from the <div className="inline-block text-red">instruction</div> of 
          disparate techniques and to the <div className="inline-block text-blue">construction</div> of a 
          familiar, reliable, and self-discovered toolset.
        </p>
        <p className="text-xl font-bold my-4 sm:text-2xl md:text-2xl lg:text-3xl font-mono">
          Our coaches follow students to their foundation of understanding, and encourage the
          development of their abstract intuition. Mathematics ought not to be a series of
          esoteric procedures. It's a game, and it should be ours to enjoy.
        </p>
      </article>
      <article className="my-8 mx-20 sm:mx-32 sm:my-8 md:w-2/3 md:my-8 lg:w-1/2 lg:my-12">
        <h2 className="text-3xl mb-3 font-bold sm:text-3xl sm:mb-6 md:text-3xl md:mb-6 lg:text-4xl">
          subjects
        </h2>     
        <p className="text-xl font-bold sm:text-2xl md:text-2xl lg:text-3xl font-mono">
          we currently offer coaching for the following subjects:
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