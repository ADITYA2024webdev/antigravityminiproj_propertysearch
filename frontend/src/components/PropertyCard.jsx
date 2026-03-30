import React from 'react';

const PropertyCard = ({ property }) => {
  // Format price helper
  const formatPrice = (price) => {
    if (price >= 10000000) return `₹ ${(price / 10000000).toFixed(2)} Cr`;
    if (price >= 100000) return `₹ ${(price / 100000).toFixed(2)} L`;
    return `₹ ${price.toLocaleString('en-IN')}`;
  };

  return (
    <div className="property-card">
      <div className="card-badge">{property.property_type}</div>
      <div className="card-type">{property.listing_type}</div>
      <div className="card-image-wrap">
        <img src={property.image_url} alt={property.title} className="card-image" />
      </div>
      <div className="card-content">
        <div className="card-price">{formatPrice(property.price)}</div>
        <h3 className="card-title">{property.title}</h3>
        <div className="card-location">
          <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          {property.city}
        </div>
        
        <div className="card-features">
          <div className="feature">
            <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            {property.bedrooms} Beds
          </div>
          <div className="feature">
            <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            {property.bathrooms} Baths
          </div>
          <div className="feature">
            <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
            {property.area} sqft
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
