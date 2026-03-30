from fastapi import FastAPI, Depends, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
from typing import List, Optional
import os

import models
import schemas
from database import SessionLocal, engine

# Create the database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Property Search API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Since it's a local dev project
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ensure static directory exists
os.makedirs("static", exist_ok=True)
app.mount("/static", StaticFiles(directory="static"), name="static")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/api/properties", response_model=List[schemas.Property])
def get_properties(
    city: Optional[str] = None,
    listing_type: Optional[str] = None,
    property_type: Optional[str] = None,
    min_budget: Optional[int] = Query(None, alias="minBudget"),
    max_budget: Optional[int] = Query(None, alias="maxBudget"),
    db: Session = Depends(get_db)
):
    query = db.query(models.Property)
    
    if city:
        # Case insensitive exact match or standard exact match
        query = query.filter(models.Property.city == city)
    if listing_type:
        query = query.filter(models.Property.listing_type == listing_type)
    if property_type:
        query = query.filter(models.Property.property_type == property_type)
    if min_budget is not None:
        query = query.filter(models.Property.price >= min_budget)
    if max_budget is not None:
        query = query.filter(models.Property.price <= max_budget)
        
    return query.all()

@app.get("/api/properties/{property_id}", response_model=schemas.Property)
def get_property(property_id: int, db: Session = Depends(get_db)):
    return db.query(models.Property).filter(models.Property.id == property_id).first()
