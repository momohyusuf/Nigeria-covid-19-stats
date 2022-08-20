import React, { useState } from 'react';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import { useGetCovidStatsQuery } from './service/covidStatsApi';

function App() {
  const { currentData, isLoading } = useGetCovidStatsQuery();
  const [place, setPlace] = useState('');

  if (isLoading) return <span className="loader"></span>;
  const {
    data: {
      death,
      discharged,
      states,
      totalActiveCases,
      totalConfirmedCases,
      totalSamplesTested,
    },
  } = currentData;
  const filteredPlaces = states.filter((item) =>
    item.state.toLowerCase().includes(place.toLowerCase())
  );

  return (
    <div>
      <h1>Nigeria's Covid-19 Statistics</h1>
      <p>{new Date().toDateString()}</p>

      <section className="general--country--statistics">
        <h2>Tested: {totalSamplesTested}</h2>
        <h2>
          Confirmed Cases:{' '}
          <span style={{ color: 'red' }}>{totalConfirmedCases} </span>
        </h2>
        <h2>
          Deaths: <span style={{ color: 'red' }}>{death} </span>
        </h2>
        <h2>
          Discharged: <span style={{ color: '#09da09' }}>{discharged}</span>
        </h2>
        <h2>
          Total Active Cases:{' '}
          <span style={{ color: 'red' }}>{totalActiveCases} </span>
        </h2>
      </section>

      <Header setPlace={setPlace} />

      <section className="states--info--container">
        {filteredPlaces.length === 0 ? (
          <h2>state does not exist</h2>
        ) : (
          filteredPlaces.map((item, index) => (
            <StatsCard key={index} {...item} />
          ))
        )}
      </section>
    </div>
  );
}

export default App;
