import React from 'react';
// import { hot } from 'react-hot-loader/root';
import * as R from 'ramda';
import Header from './Header.js';
import Footer from './Footer';

import contactQR from '../assets/contact-qr.png';
import urlQR from '../assets/kairosURL-qr.png';

const subjArr = [
  'we',
  'teach',
  'algebraI',
  'geometry',
  'algebraII',
  'precalc',
  'trig',
  'calculus',
]

export const charify = (str) => {
  return(
    R.addIndex(R.map)((char, i) => <div key={i} >{char}</div>, str)
  )
}

const Promotional = () => {
  return(
    <div>
      <Header />
      <div className="container my-12 font-mono text-center font-black text-blue text-2xl w-5/6 mt-16 sm:text-3xl md:text-4xl">
        <p>
          limited maths tutoring available for spring 2019 semester
        </p>
        <div className="flex flex-col text-2xl text-red font-mono uppercase sm:text-3xl md:text-4xl">
          <div className="flex flex-row justify-between my-2 sm:my-4 md:my-4">
            { charify(subjArr[0]) }
          </div>
          <div className="flex flex-row justify-between my-2 sm:my-4 md:my-4">
            { charify(subjArr[1]) }
          </div>
          <div className="flex flex-row justify-between my-2 sm:my-4 md:my-4">
            { charify(subjArr[2]) }
          </div>
          <div className="flex flex-row justify-between my-2 sm:my-4 md:my-4">
            { charify(subjArr[3]) }
          </div>
          <div className="flex flex-row justify-between my-2 sm:my-4 md:my-4">
            { charify(subjArr[4]) }
          </div>
          <div className="flex flex-row justify-between my-2 sm:my-4 md:my-4">
            { charify(subjArr[5]) }
          </div>
          <div className="flex flex-row justify-between my-2 sm:my-4 md:my-4">
            { charify(subjArr[6]) }
          </div>
          <div className="flex flex-row justify-between my-2 sm:my-4 md:my-4">
            { charify(subjArr[7]) }
          </div>
        </div>
      </div>
      <div className="flex flex-col container justify-between mb-2 w-5/6 sm:flex-col md:flex-col lg:flex-row">
        <div className="flex font-mono font-bold text-base flex-row justify-between my-3 sm:text-xl md:text-2xl lg:text-xl lg:flex-1 lg:pr-10">
          <img src={urlQR} className="w-24 h-24 lg:w-32 lg:h-32" alt="QR code which links to kairoscounselors.com"/>
          <p className="m-1">
            visit <a href="http://kairoscounselors.com" className="text-blue">kairoscounselors.com</a>
          </p>
        </div>
        <div className="flex font-mono font-bold text-base flex-row justify-between my-3 sm:text-xl md:text-2xl lg:text-xl lg:flex-1">
          <div className="lg:pr-1">
            <p className="m-1">
              call, email & SMS to set up a free phone consultation
            </p>
            <ul>
              <li>email <a href="mailto:info@kairoscounselors.com" className="text-blue">info@kairoscounselors.com</a></li>
              <li>call & SMS 681.321.1312</li>
            </ul>
          </div>
          <img src={contactQR} className="w-24 h-24 lg:w-32 lg:h-32" alt="QR containing 'email: info@kairoscounselors.com' and 'call & SMS: 6813211312'"/>
        </div>
      </div>
      <Footer />
    </div>
  )
}
// export default hot(Promotional);
export default Promotional;