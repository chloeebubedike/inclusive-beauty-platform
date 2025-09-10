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

# TODO: Replace dummy data with data from db
services = [
    Service(name="classic sew in", price=125, provider="stephanie lebby", isNew=False),
    Service(name="hydro-bonding", price=120, provider="stephanie lebby",  isNew=True),
    Service(name="boho knotless braids", price=180, provider="marla mae",  isNew=False),
    Service(name="keratin blow dry", price=180, provider="house of hair",  isNew=False),

]

@app.get("/services", response_model=List[Service])
async def get_services():
    return services
