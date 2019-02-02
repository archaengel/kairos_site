import React from 'react';
// import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation.js';
// import Header from './Header.js';
import Home from './Home';
// import Body from './Body.js';
// import Footer from './Footer.js';
import Contact from './Contact';
import Promotional from './Promotional';
import Careers from './Careers';
import About from './About';

const Layout = () => {
  return(
    <Router>
    <div className="main bg-grey-lightest">
      <Navigation /> 
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/promotional' component={Promotional} />
        <Route path='/contact' component={Contact} />
        <Route path='/jobs' component={Careers} />
      </Switch>
    </div>
    </Router>
  )
};

// const layout = () => <div>hello world</div>;

// export default hot(Layout);
export default Layout;