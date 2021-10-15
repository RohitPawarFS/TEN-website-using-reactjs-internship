import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import More from './components/pages/More';
import Certification from './components/pages/Certification';
import OnlineCourses from './components/pages/OnlineCourses';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Blog from './components/pages/Blog';
import Blog2 from './components/pages/Blog2';
import SocialMedia from './components/pages/SocialMedia';
import About from './components/pages/About';
import MembershipReg from './components/pages/MembershipReg';
import CampusAmb from './components/pages/CampusAmb';
import Mentorship from './components/pages/Mentorship';
import complaints from './components/pages/complaints';
import TestimonialsMainPage from './components/pages/TestimonialsMainPage';
import Hiring from './components/pages/Hiring';
import Forum from './components/pages/Forum';
import Hackathon from './components/pages/Hackathon';
import AlumniTeam from './components/pages/AlumniTeam';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/More' component={More} />
        <Route path='/OnlineCourses' component={OnlineCourses} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/Blog' component={Blog} />
        <Route path='/Blog2' component={Blog2} />
        <Route path='/SocialMedia' component={SocialMedia} />
        <Route path='/About' component={About} />
        <Route path='/MembershipRegistration' component={MembershipReg} />
        <Route path='/CampusAmbassdor' component={CampusAmb} />
        <Route path='/Mentorship' component={Mentorship} />
        <Route path='/complaints' component={complaints} />
        <Route path='/Certification' component={Certification} />
        <Route path='/Testimonials' component={TestimonialsMainPage} />
        <Route path='/Hiring' component={Hiring} />
        <Route path='/Forum' component={Forum} />
        <Route path='/Hackathon' component={Hackathon} />
        <Route path='/Alumni-Team' component={AlumniTeam} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;