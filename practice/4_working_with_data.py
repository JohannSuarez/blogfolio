"""
src: https://docs.sqlalchemy.org/en/14/tutorial/data_insert.html
"""

from sqlalchemy import (create_engine, text, MetaData, ForeignKey,
                        Table, Column, Integer, String, insert, select)
from sqlalchemy.orm import relationship, registry, declarative_base
from dotenv import dotenv_values

def main():
    config: dict = dotenv_values(".env")

    addr: str | None = config['SQL_ADDR']
    name: str | None = config['SQL_NAME']
    password: str | None = config['SQL_PASS']
    db: str | None = config['SQL_DB']

    MARIADB_DATABASE_URL = f"mariadb+mariadbconnector://{name}:{password}@{addr}:3306/{db}"
    engine = create_engine(MARIADB_DATABASE_URL, echo=True, future=True)

    metadata_obj = MetaData()

    # Table Reflection
    '''
    To round out the section on working with table metadata, we will
    illustrate another operation that was mentioned at the beginning of the section,
    that of table reflection. Table reflection refers to thep rocess of generating
    Table and related objects by reading the current state of a database. Whereas
    in the previous sections we've been declaring Table objects in Python
    and then emitting DDL to the database, the reflection process does it in reverse.
    '''

    # We're grabbing the tables from the last modules. We need them.
    address_table = Table("address", metadata_obj, autoload_with=engine)
    user_table = Table("user_account", metadata_obj, autoload_with=engine)




    # Insertng Rows With Core
    '''
    When using Core, a SQL INSERT statement is generated using the insert()
    function - this function generates a new instance of Insert which represents
    an INSERT statement in SQL, that adds new data into a table.
    '''

    '''
    A simple example of Insert illustrating the target table and the VALUES clause
    at once:
    '''

    stmt = insert(user_table).values(name='Laurie', fullname='Laurie Doe')
    print(stmt)

    '''
    The stringified form is created by producing a Compiled form
    of the object which includes a database-specific string SQL representation of
    the statement; we can acquire this object directly using the CaluseElement.compile()
    method.
    '''
    compiled = stmt.compile()
    print(compiled.params)

    # Executing the Statement
    '''
    Invoking the statement we can INSERT a row into user_table.
    The INSERT SQL as well as the bundled parameters can be seen in the SQL
    logging.
    '''

    '''
    with engine.connect() as conn:
        result = conn.execute(stmt)
        conn.commit()
        print(result.inserted_primary_key)

        CursorResult.inserted_primary_key returns a tuple because a
        primary key may contain multiple columns. This is know as a composite
        primary key. The CursorResult.inserted_primary_key is intended to
        always contain the complete primary key of the record just inserted, not
        just a "cursor.lastrowid" kind of value, and is also intended to be populated
        regardless of whether or not ot "autoincrement" were used, henced to express
        a complete primary key it's a tuple.
    '''


    # Insert usually generates the "values" clause automatically
    '''
    The examples above made use of the Insert.values() method to explicitly
    create VALUES clause of the SQL INSERT statement. This method in fact
    has some variants that allow for special forms such as multiple rows
    in one statement and insertion of SQL expressions. However the usual
    way that Insert is used is such that the VALUES clause is generated
    automatically from the parameters passed to the Connection.execute()
    method; below we INSERT two more rows to illustrate this:
    '''
    with engine.connect() as conn:
        result = conn.execute(
            insert(user_table),
            [
                {"name": "Sandy", "fullname": "Sandy Cheeks"},
                {"name": "Patrick", "fullname": "Patrick Star"},
            ]
        )
        conn.commit()


    # INSERT...FROM SELECT
    '''
    The Insert construct can compose an INSERT that
    gets rows directly form a SELECT using the Insert.from_select()
    method.
    '''
    select_stmt = select(user_table.c.id, user_table.c.name + "@aol.com")
    insert_stmt = insert(address_table).from_select(
        ["user_id", "email_address"], select_stmt
    )
    print(insert_stmt)

if __name__ == "__main__":
    main()
