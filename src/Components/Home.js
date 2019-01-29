import React from 'react';
// import {hot} from 'react-hot-loader/root';

import Body from './Body';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  return(
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
// export default hot(Home);
export default Home;