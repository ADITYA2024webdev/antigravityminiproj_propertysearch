from sqlalchemy import Column, Integer, String
from database import Base

class Property(Base):
    __tablename__ = "properties"

    id = Column(Integer, primary_key=True, index=True)
    city = Column(String, index=True)
    listing_type = Column(String, index=True) # 'buy' or 'rent'
    property_type = Column(String, index=True) # 'flat' or 'house'
    price = Column(Integer, index=True)
    title = Column(String)
    description = Column(String)
    image_url = Column(String)
    bedrooms = Column(Integer)
    bathrooms = Column(Integer)
    area = Column(Integer) # sqft
