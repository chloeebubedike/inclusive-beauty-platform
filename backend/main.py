from fastapi import FastAPI # type: ignore
from pydantic import BaseModel # type: ignore
from typing import List
from fastapi.middleware.cors import CORSMiddleware # type: ignore


app = FastAPI(title="Service API")

origins = [
    "http://localhost:5175",  
    "http://127.0.0.1:5175",  
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model = strongly typed data
class Service(BaseModel):
    name: str
    price: float
    provider: str
    isNew: bool
    location: str

# TODO: Replace dummy data with data from db
services = [
    Service(name="classic sew in", price=125, provider="stephanie lebby", isNew=False, location="New Cross Gate, London"), 
    Service(name="hydro-bonding", price=120, provider="stephanie lebby",  isNew=True, location="New Cross Gate, London"),
    Service(name="boho knotless braids", price=180, provider="marla mae",  isNew=False, location="Queens Parade, London"),
    Service(name="keratin blow dry", price=180, provider="house of hair",  isNew=False, location="Shephards Bush London"),

]

@app.get("/services", response_model=List[Service])
async def get_services():
    return services
