import React from 'react';
import FlightSearch from './components/FlightSearch';
import './styles/tailwind.css'; // Import the tailwind.css file

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <FlightSearch />
    </div>
  );
};

export default App;
