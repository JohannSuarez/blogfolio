"""
src: https://docs.sqlalchemy.org/en/14/tutorial/metadata.html
"""

from sqlalchemy import create_engine, text, MetaData, ForeignKey
from sqlalchemy import Table, Column, Integer, String
from sqlalchemy.orm import Session
from dotenv import dotenv_values

def main():
    config: dict = dotenv_values(".env")

    addr: str | None = config['SQL_ADDR']
    name: str | None = config['SQL_NAME']
    password: str | None = config['SQL_PASS']
    db: str | None = config['SQL_DB']

    MARIADB_DATABASE_URL = f"mariadb+mariadbconnector://{name}:{password}@{addr}:3306/{db}"
    engine = create_engine(MARIADB_DATABASE_URL, echo=True, future=True)

    """
    The central element of both SQLAlchemy Core and ORM is the SQL Expression
    Language which allows for fluent, composable construction of SQL queries.
    The foundation for these queries are Python objects that represent database
    concepts like tables and columns. These objects are known collectively as
    database metadata.

    The most common foundational objects for database metadata in SQLAlchemy
    are known as MetaData, Table, and Column. The sections below will illustrate
    how these objects are used in both a Core-oriented style as well as an ORM-oriented style.
    """

    """
    Having a single MetaData object for an entire application is the most common case,
    represented as a module-level variable in a single place in an application, often
    in a "models" or "dbschema" type of package. There can be multiple MetaData
    collections as well, however it's typically most helpful if a series of Table
    objects that are related to each other belong to a single MetaData collection.
    """
    metadata_obj = MetaData()

    user_table = Table(
        "user_account",
        metadata_obj,
        Column('id', Integer, primary_key=True),
        Column('name', String(30)),
        Column('fullname', String(100))
    )

    '''
    The first Column in the above user_table includes the Column.primary_key
    parameter which is a shorthand technique of indicating that this Column
    should be part of the primary key for this table. The primary key itself
    is normally decalred implicitly and is represented by the PrimaryKeyConstraint construct,
    which we can see on the Table.primary_key attribrute on the Table object.

    The constraint that is most typically declared explicitly is the ForeignKeyConstraint
    object that corresponds to the database foreign key constraint. When we declare tables
    that are related to each other, SQLAlchemy uses the presence of these foreign key
    constraint declarations not only so that they are emitted within CREATE statements
    to the database, but also to assist in constructing SQL expressions.

    A ForeignKeyConstarint that involves only a single column on the target table is
    typically declared using a column-level shorthand notation via the ForeignKey object.
    Below we declare a second table address that will have a foreign key constraint referring
    to the user table.
    '''

    address_table = Table(
        "address",
        metadata_obj,
        Column('id', Integer, primary_key=True),
        Column('user_id', ForeignKey('user_account.id'), nullable=False),
        Column('email_address', String(100), nullable=False)
    )

    '''
    The table above also features a third kind of constraint,
    which in SQL is the "NOT NULL" constraint, indicated above
    using the Column.nullable parameter.

    In the next section we will emit the completed DDL for the user and the address
    table to see the completed result.
    '''


    '''
    We've constructed a farily elaborate object heirarchy to represent two database tables,
    starting at the root MetaData object, then into two Table objects,
    each of which hold onto a collection of Column and Constraint objects. This object
    structure will be at the center of most operations we perofrm with both Core and
    ORM going forward.

    The first useful thing we can do with this structure will be to emit CREATE_TABLE statments,
    or DDL, tj our SQLite database so that we can insert and query data from them. We have already
    all the tools needed to do so, by invoking the MetaData.create_all() method on our MetaData,
    sending it the Engine that refers to the target database;
    '''

    metadata_obj.create_all(engine)

if __name__ == "__main__":
    main()
