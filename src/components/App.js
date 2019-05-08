import React from 'react';
import Header from '../components/Header';
import '../assets/css/App.css';
import HobbiesFrom from './HobbiesForm';
import HobbiesList from './HobbiesList';

function App() {
  return (
    <div className="App">
      <Header />
      <HobbiesFrom />
      <HobbiesList />
    </div>
  );
}

export default App;
