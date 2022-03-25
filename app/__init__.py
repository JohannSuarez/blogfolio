from sqlalchemy import create_engine, text, MetaData, ForeignKey
from sqlalchemy import Table, Column, Integer, String
from sqlalchemy.orm import relationship, sessionmaker, declarative_base
from sqlalchemy.ext.declarative import declarative_base
from dotenv import dotenv_values



config: dict = dotenv_values(".env")
addr: str | None = config['SQL_ADDR']
name: str | None = config['SQL_NAME']
password: str | None = config['SQL_PASS']
db: str | None = config['SQL_DB']

MARIADB_DATABASE_URL = f"mariadb+mariadbconnector://{name}:{password}@{addr}:3306/{db}"
#engine = create_engine('sqlite:///:memory:')

engine = create_engine(MARIADB_DATABASE_URL, echo=True, future=True)
Base = declarative_base()

from .tables.person import Person
from .tables.dht import DHT

SessionLocal = sessionmaker(bind=engine)


Base.metadata.create_all(engine)
