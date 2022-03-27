from sqlalchemy import Column, DateTime, Float
from app import Base


class DHT(Base):
    __tablename__ = 'dht'

    datetime = Column(DateTime, primary_key=True)
    humidity = Column(Float(16))
    temp = Column(Float(16))
