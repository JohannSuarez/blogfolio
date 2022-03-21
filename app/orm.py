from sqlalchemy import create_engine, text, MetaData, ForeignKey
from sqlalchemy import Table, Column, Integer, String
from sqlalchemy.orm import relationship, registry, declarative_base
from dotenv import dotenv_values

from .tables.person import Person
from app import Session


def main():

    session = Session()
    insertion_test = Person(identification_number=0,
                            person_name="Johann Suarez")

    session.add(insertion_test)
    session.commit()

