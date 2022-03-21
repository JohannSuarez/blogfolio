from sqlalchemy import Table, Column, Integer, Numeric, String
from sqlalchemy.ext.declarative import declarative_base
from app import Base


class Person(Base):
    __tablename__ = 'person_info'

    identification_number = Column(Integer(), primary_key=True)
    person_name = Column(String(100))
