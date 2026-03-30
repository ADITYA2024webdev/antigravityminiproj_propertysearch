import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyList = ({ properties, loading, error }) => {
  if (loading) {
    return <div className="state-message">Loading amazing properties...</div>;
  }

  if (error) {
    return <div className="state-message">Failed to load properties: {error.message}</div>;
  }

  if (properties.length === 0) {
    return <div className="state-message">No properties found matching your criteria. Try adjusting your search!</div>;
  }

  return (
    <div className="property-grid">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
