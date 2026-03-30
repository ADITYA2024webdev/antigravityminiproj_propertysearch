import React, { useState, useEffect } from 'react';
import HeroSearch from './components/HeroSearch';
import PropertyList from './components/PropertyList';
import './index.css';

function App() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProperties = async (searchParams = {}) => {
    setLoading(true);
    setError(null);
    try {
      const query = new URLSearchParams();
      
      if (searchParams.city) query.append('city', searchParams.city);
      if (searchParams.listing_type) query.append('listing_type', searchParams.listing_type);
      if (searchParams.property_type) query.append('property_type', searchParams.property_type);
      if (searchParams.minBudget) query.append('minBudget', searchParams.minBudget);
      if (searchParams.maxBudget) query.append('maxBudget', searchParams.maxBudget);

      const url = `http://localhost:8000/api/properties?${query.toString()}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      setProperties(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch of all properties
    fetchProperties();
  }, []);

  return (
    <div className="app">
      <HeroSearch onSearch={fetchProperties} />
      <main className="main-content">
        <h2 className="section-title">Promoted Properties</h2>
        <PropertyList properties={properties} loading={loading} error={error} />
      </main>
    </div>
  );
}

export default App;
