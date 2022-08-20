import React from 'react';

function StatsCard({
  state,
  discharged,
  death,
  confirmedCases,
  casesOnAdmission,
}) {
  return (
    <div className="stats--card">
      <h3>{state}</h3>
      <p style={{ color: 'red' }}>Confirmed Case: {confirmedCases}</p>
      <p style={{ color: 'red' }}>Death: {death}</p>
      <p style={{ color: '#09da09' }}>Discharged: {discharged}</p>
      <p style={{ color: 'red' }}>Currently Admitted {casesOnAdmission}</p>
    </div>
  );
}

export default StatsCard;
