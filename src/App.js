/* jshint esversion: 11 */

import React from 'react';
import Header from './components/Header';
import UpcomingAuctions from './components/UpcomingAuctions';
import About from './components/About';
import Footer from './components/Footer';
import PrimaryHeader from './components/PrimaryHeader';
import LatestUpdates from './components/LatestUpdates';
import SearchSection from './components/SearchSection';

const App = () => {
  return (
    <div>
      <PrimaryHeader />
      <Header />
      <SearchSection />
      <LatestUpdates />
      <About />
      <UpcomingAuctions />
      <Footer />
    </div>
  );
};

export default App;
