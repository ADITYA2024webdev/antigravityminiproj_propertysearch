from sqlalchemy.orm import Session
from database import SessionLocal, engine
import models
import random

models.Base.metadata.create_all(bind=engine)

CITIES = ["Bangalore", "Mumbai"]
LISTING_TYPES = ["buy", "rent"]
PROPERTY_TYPES = ["flat", "house"]

def generate_mock_data():
    db = SessionLocal()
    
    if db.query(models.Property).count() >= 20:
        print("Database already seeded.")
        db.close()
        return

    # Seed exactly 10 for Bangalore, 10 for Mumbai
    # with a mix of flat/house and buy/rent
    for i in range(20):
        city = "Bangalore" if i < 10 else "Mumbai"
        listing_type = random.choice(LISTING_TYPES)
        property_type = random.choice(PROPERTY_TYPES)
        
        if listing_type == "rent":
            price = random.randint(30000, 150000) if city == "Mumbai" else random.randint(15000, 80000)
        else:
            price = random.randint(10000000, 100000000) if city == "Mumbai" else random.randint(5000000, 50000000)
        
        bedrooms = random.randint(1, 4)
        bathrooms = max(1, bedrooms - random.randint(0, 1))
        area = random.randint(500, 3000)
        
        title = f"Beautiful {bedrooms} BHK {property_type.capitalize()} for {listing_type.capitalize()} in {city}"
        description = f"Check out this amazing {property_type} located in the heart of {city}. It features {bedrooms} bedrooms, {bathrooms} bathrooms, and covers an area of {area} sqft. Perfect for anyone looking to {listing_type}!"
        
        # Select image based on property type (mix between exterior and interior)
        img_type = "exterior" if random.choice([True, False]) else "interior"
        img_name = f"{property_type}_{img_type}.png"
        image_url = f"http://localhost:8000/static/{img_name}"

        prop = models.Property(
            city=city,
            listing_type=listing_type,
            property_type=property_type,
            price=price,
            title=title,
            description=description,
            image_url=image_url,
            bedrooms=bedrooms,
            bathrooms=bathrooms,
            area=area
        )
        db.add(prop)
            
    db.commit()
    print("Database seeded successfully with 20 properties.")
    db.close()

if __name__ == "__main__":
    generate_mock_data()
