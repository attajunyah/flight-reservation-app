import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faUser, faMapMarkerAlt, faSearch, faCalendarDay } from '@fortawesome/free-solid-svg-icons'; // Import the necessary icons

const FlightSearch: React.FC = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [tripType, setTripType] = useState('return');
  const [passengerType, setPassengerType] = useState('adult');
  const [numPassengers, setNumPassengers] = useState(1);

  const handleSearch = () => {
    console.log(`Searching for ${tripType} flights from ${departure} to ${destination} on ${date}`);
    // Implement search functionality here
  };

  return (

    <div className="flight-search">
      <h2 className="flight-search-title">
        <FontAwesomeIcon icon={faPlane} /> Panda Flights
      </h2>

      <div className="trip-type-dropdown">
        <label htmlFor="tripType"><FontAwesomeIcon icon={faPlane} rotation={270} className='icon-color'/>Select Trip Type:</label>
        <select
          id="tripType"
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
        >
          <option value="return">Return</option>
          <option value="oneWay">One Way</option>
          <option value="multiCity">Multi-City</option>
        </select>
      </div>

      <div className="passenger-selection">
        <label htmlFor="passengerType"><FontAwesomeIcon icon={faUser}  className="icon-color"/>Passenger Type:</label>
        <select
          id="passengerType"
          value={passengerType}
          onChange={(e) => setPassengerType(e.target.value)}
        >
          <option value="adult">Adults (Over 11)</option>
          <option value="child">Children (2-11)</option>
          <option value="infant">Infants (Under 2)</option>
        </select>

        <label htmlFor="numPassengers">Number of Passengers:</label>
        <input
          type="number"
          id="numPassengers"
          value={numPassengers}
          min={1}
          onChange={(e) => setNumPassengers(parseInt(e.target.value))}
        />
      </div>

      <div className='departure-destination-date'>
        <label htmlFor="departure"><FontAwesomeIcon icon={faPlane} className="icon-color"/> From:</label>
        <input
          type="text"
          placeholder="Departure"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          className="flight-search-input"
        />
        <label htmlFor="destination"><FontAwesomeIcon icon={faMapMarkerAlt} className="icon-color"/>To:</label>
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="flight-search-input"
        />
        <label htmlFor="date"><FontAwesomeIcon icon={faCalendarDay} className="icon-color"/>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="flight-search-input"
        />
        <button onClick={handleSearch} className="flight-search-button">
          <FontAwesomeIcon icon={faSearch} />Search Flights
        </button>
        
      </div>
    </div>
  );
};

export default FlightSearch;
