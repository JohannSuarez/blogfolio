from typing import List
from fastapi import Depends, FastAPI, HTTPException
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def get_db():
    # Dependency
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/things/")
async def read_things(token: str = Depends(oauth2_scheme)):
    '''
    Referring to Depends(oauth2_scheme)

    This dependency will provide a str that is assigned to the parameter
    token of the path operation function.

    FastAPI will know that it can use this dependency to define a "security scheme"
    in the OpenAPI schema (and the automatic API docs)

    It will go and look in the request for that Authorization header,
    check if the value is Bearer plus some token, and will return the token as a str.
    '''
    return {"token": token}


@app.post("/dht/", response_model=schemas.DHT)
def create_dht(dht: schemas.DHTCreate,
               db: Session = Depends(get_db)):
    return crud.create_dht(db=db, dht_data=dht)


@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate,
                db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(
            status_code=400, detail="Email already registered.")
    return crud.create_user(db=db, user=user)


@app.get("/users/", response_model=list[schemas.User])
def read_users(skip: int = 0,
               limit: int = 100,
               db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users


@app.get("/users/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user


@app.post("/users/{user_id}/items/", response_model=schemas.Item)
def create_item_for_user(user_id: int,
                         item: schemas.ItemCreate,
                         db:  Session = Depends(get_db)):
    return crud.create_user_item(db=db, item=item, user_id=user_id)


@app.get("/items/", response_model=list[schemas.Item])
def read_items(skip: int = 0,
               limit: int = 100,
               db: Session = Depends(get_db)):
    items = crud.get_items(db, skip=skip, limit=limit)
    return items
