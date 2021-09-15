import React from  'react';
import { withLDProvider } from 'launchdarkly-react-client-sdk';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import HelloWorld from './helloWorld';
import {Switch ,Route , Redirect} from 'react-router-dom';

const App =()=>{
  return(
    <div>
    <Navbar/>
    <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/about" component={About} />
     <Route exact path="/service" component={Service} />
     <Route exact path="/contact" component={Contact} />
     <Route exact path='/helloWorld' component={HelloWorld}/>
     <Redirect to="/"/>
    </Switch>
<Footer/>
    </div>
  )
}
// export default App;

export default withLDProvider({
  clientSideID: '60c1d604c428a90bf233808c',
  user: {
      "key": "user_key",
      "name": "User Name",
      "email": "User@email.com"
  }
})(App);