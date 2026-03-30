from pydantic import BaseModel

class PropertyBase(BaseModel):
    city: str
    listing_type: str
    property_type: str
    price: int
    title: str
    description: str
    image_url: str
    bedrooms: int
    bathrooms: int
    area: int

class Property(PropertyBase):
    id: int

    class Config:
        from_attributes = True
