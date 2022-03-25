from sqlalchemy import create_engine, text, MetaData, ForeignKey
from sqlalchemy import Table, Column, Integer, String
from sqlalchemy.orm import relationship, registry, declarative_base
from dotenv import dotenv_values
from datetime import datetime

from .tables.person import Person
from .tables.dht import DHT
from app import SessionLocal



def main():

    session = SessionLocal()
    person_insertion_test = Person(identification_number=0,
                            person_name="Johann Suarez")

    dht_insertion_test = DHT(datetime=datetime.now(),
                             humidity=23.444,
                             temp=15.001)

    session.add(person_insertion_test)
    session.add(dht_insertion_test)

    session.commit()

