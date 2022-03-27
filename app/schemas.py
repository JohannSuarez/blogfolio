"""
Just know that there are usually two Pydantic models
for one "thing" or item -- one for reading and returning.

For example, before creating an item, we don't know what will
be the ID assigned to it, but when reading it (when returning from the API)
wee will already know its ID.
"""
from pydantic import BaseModel
from datetime import datetime


class DHTBase(BaseModel):
    temp: float
    humidity: float


class DHTCreate(DHTBase):
    pass

class DHT(DHTBase):
    """
    In the Pydantic models for reading, we add an internal Config class.
    """
    id: int
    datetime: datetime

    class Config:
        orm_mode = True


class ItemBase(BaseModel):
    title:  str
    description: str | None = None


class ItemCreate(ItemBase):
    pass


class Item(ItemBase):
    """
    In the Pydantic models for reading, we add an internal Config class.
    """
    id: int
    owner_id: int

    class Config:
        """
        Pydantic's orm_mode will tell the Pydantic model to read
        the data even if it's not a dict, but an ORM model
        (or any other arbitrary object with attributes
        """
        orm_mode = True


class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    is_active: bool
    items: list[Item] = []

    class Config:
        orm_mode = True
