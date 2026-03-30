import React, { useState } from 'react';

const HeroSearch = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [listingType, setListingType] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [budgetRange, setBudgetRange] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Parse budget range
    let minBudget = null;
    let maxBudget = null;
    
    if (budgetRange) {
      const parts = budgetRange.split('-');
      if (parts.length === 2) {
        minBudget = parseInt(parts[0]);
        maxBudget = parseInt(parts[1]);
      } else if (budgetRange.startsWith('>')) {
        minBudget = parseInt(budgetRange.substring(1));
      } else if (budgetRange.startsWith('<')) {
        maxBudget = parseInt(budgetRange.substring(1));
      }
    }

    onSearch({
      city: city || null,
      listing_type: listingType || null,
      property_type: propertyType || null,
      minBudget,
      maxBudget
    });
  };

  return (
    <div className="hero">
      <div className="navbar">
        <div className="logo">AuraEstates.</div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">Find Your Perfect Home in India</h1>
        <p className="hero-subtitle">Discover premium properties in Bangalore and Mumbai matching your lifestyle and preferences.</p>
      </div>

      <form className="search-container" onSubmit={handleSearch}>
        <div className="search-field">
          <label>City</label>
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">All Cities</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </div>
        
        <div className="search-field">
          <label>Property Type</label>
          <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
            <option value="">Any Type</option>
            <option value="flat">Flat / Apartment</option>
            <option value="house">Independent House</option>
          </select>
        </div>

        <div className="search-field">
          <label>Looking to</label>
          <select value={listingType} onChange={(e) => setListingType(e.target.value)}>
            <option value="">Buy & Rent</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        <div className="search-field">
          <label>Budget</label>
          <select value={budgetRange} onChange={(e) => setBudgetRange(e.target.value)}>
            <option value="">Any Budget</option>
            <option value="<50000">Under ₹ 50K (Rent)</option>
            <option value="50000-150000">₹ 50K - ₹ 1.5L (Rent)</option>
            <option value="<10000000">Under ₹ 1 Cr (Buy)</option>
            <option value="10000000-50000000">₹ 1 Cr - ₹ 5 Cr (Buy)</option>
            <option value=">50000000">Above ₹ 5 Cr (Buy)</option>
          </select>
        </div>
        
        <button type="submit" className="btn-search">Search Properties</button>
      </form>
    </div>
  );
};

export default HeroSearch;
