from sqlalchemy import (create_engine, text, MetaData, ForeignKey,
                        Table, Column, Integer, String, insert, select)
from sqlalchemy.orm import (relationship, registry,
                            declarative_base, Session)
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

    # We're grabbing the tables from the last modules. We need them.
    address_table = Table("address", metadata_obj, autoload_with=engine)
    user_table = Table("user_account", metadata_obj, autoload_with=engine)

    # Selecting Rows with Core or ORM
    '''
    For both Core or ORM, the select() function generates a Select construct which
    is used for all SELECT queries. Passed to methods like Conection.execute() in Core
    and Session.execute() in ORM, a SELECT statement is emitted in the current transaction
    and the result rows available via the returned Result object.
    '''

    # The select() SQL Expression Construct
    '''
    The select() construct builds up a statement in the same way as that of insert(),
    using a generative approach where each method builds more state onto the object. Like
    the other SQL constructs, it can be stringified in place:
    '''

    stmt = select(user_table).where(user_table.c.name == 'spongebob')
    print(stmt)

    '''
    Also in the same manner as all the other statement-level SQL constructs,
    to actually run the statement we pass it to a execution method. Since a SELECT
    statement returns rows we can always interate the result object to get Row objects
    back:
    '''
    with engine.connect() as conn:
        for row in conn.execute(stmt):
            print(row)

    '''
    When using the ORM, particularly with a select() construct that's composed
    against ORM entities, we will want to execute it using the Session.execute()
    method on the Session; using this approach, we continue to get Row objects
    from the result, however these rows are now capable of including complete
    entities, such as instances of the User class, as individual elements within
    each row:
    '''
    with Session(engine) as session:
        for row in session.execute(stmt):
            print(row)


if __name__ == "__main__":
    main()
