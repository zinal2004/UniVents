import React from 'react';
import LandingPage from './components/LandingPage'// Import the component
import SignUp from './components/SignUp';
import Home from './components/Home'
import EventPage from './components/EventPage';
import Navbar from './components/Navbar';
import CreateEventEdit from './components/CreateEventEdit';
import CreateEventBanner from './components/CreateEventBanner';
import CreateEventTicket from './components/CreateEventTicket';
import CreateEventReview from './components/CreateEventReview';
import ProfilePage from './components/ProfilePage';
import ProfileEmail from './components/ProfileEmail';
import ProfilePassword from './components/ProfilePassword';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <LandingPage />  */}
      {/* <SignUp /> */}

      <Home />
      
      {/* <EventPage /> */}
      {/* <CreateEventEdit /> */}
      {/* <CreateEventBanner /> */}
      {/* <CreateEventTicket /> */}
      {/* <CreateEventReview /> */}
      {/* <ProfileEmail /> */}
      {/* <ProfilePage /> */}
      {/* <ProfilePassword /> */}
    </div>
  );
}

export default App;