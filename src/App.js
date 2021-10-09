import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import About from './components/pages/About';
import TestimonialsMainPage from './components/pages/TestimonialsMainPage';
import Hiring from './components/pages/Hiring';
import Forum from './components/pages/Forum';
import Hackathon from './components/pages/Hackathon';
import AlumniTeam from './components/pages/AlumniTeam';
import CourseEntrepreneurship from './components/coursespages/CourseEntrepreneurship';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
        <Route path='/About' component={About} />
        <Route path='/Testimonials' component={TestimonialsMainPage} />
        <Route path='/Hiring' component={Hiring} />
        <Route path='/Forum' component={Forum} />
        <Route path='/Hackathon' component={Hackathon} />
        <Route path='/Alumni-Team' component={AlumniTeam} />
        <Route path='/CourseEntrepreneurship' component={CourseEntrepreneurship} />
      </Switch>
    </Router>
  );
}

export default App;