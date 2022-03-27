from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import dotenv_values

config: dict = dotenv_values(".env")

addr: str | None = config['SQL_ADDR']
name: str | None= config['SQL_NAME']
password: str | None = config['SQL_PASS']
db: str | None = config['SQL_DB']

MARIADB_DATABASE_URL = f"mariadb+mariadbconnector://{name}:{password}@{addr}:3306/{db}"

engine = create_engine(MARIADB_DATABASE_URL, echo=True,  future=True)

SessionLocal = sessionmaker(autocommit=False,
                            autoflush=False,
                            bind=engine)

Base = declarative_base()
