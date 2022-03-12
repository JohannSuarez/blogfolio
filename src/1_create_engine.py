"""
Source: https://docs.sqlalchemy.org/en/14/tutorial/dbapi_transactions.html
"""
from sqlalchemy import create_engine, text
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

    # engine = create_engine("sqlite+pysqlite:///:memory:", echo=True, future=True)

    '''
    with engine.connect() as conn:
        conn.execute(text("CREATE TABLE some_table (x int, y int)"))
        conn.execute(
            text("INSERT INTO some_table (x, y) VALUES (:x, :y)"),
            [{"x": 1, "y": 1}, {"x": 2, "y": 4}]
        )
        conn.commit()
    '''

    # "begin-once" style of committing data.
    '''
    with engine.begin() as conn:
        conn.execute(
            text("INSERT INTO some_table (x, y) VALUES (:x, :y)"),
            [{"x": 6, "y": 8}, {"x": 9, "y": 10}]
        )
    '''

    # Fetching Rows
    '''
    We'll first illustrate the Result object more closely by making use of the rows
    we've inserted previously, running a textual SELECT statement on the table we've created.
    '''
    '''
    with engine.connect() as conn:
        result = conn.execute(text("SELECT x, y FROM some_table"))

        # print(result.all()) # Another option, returns a list of Row objects.

        for row in result:
            print(f"x: {row.x} y: {row.y}")
    '''

    # Sending Parameters
    '''
    SQL statements are usually accompanied by data that is to be
    passed with the statement itself, as we saw in the INSERT example
    previously. The Connection.execute() method therefore also accepts parameters,
    which are referred towards as bound parameters. A rudimentary example might be
    if we wanted to limit our SELECT statement only to rows that meet a certain
    criteria, such as rows where the "y" value were greater than a certain value
    that is passed in to a function.
    '''

    '''
    In order to achieve this such that the SQL statement can remain fixed
    and that the driver can properly sanitize the value, we add a WHERE criteria
    to our statement that names a new parameter called "y"; the text() construct
    accepts these using a colon format ":y". The actual value for ":y" is then
    passed as the second argument to Connection.execute() in the form of a dictionary.
    '''

    '''
    with engine.connect() as conn:
        result = conn.execute(
            text("SELECT x, y FROM some_table WHERE y > :y"),
            {"y": 2}
        )
        for row in result:
            print(f"x: {row.x} y: {row.y}")
    '''


    # Executing with an ORM Session
    '''
    As mentioned previously, most of the patterns and examples above
    apply to use with the ORM as well, so here we weill introduce this usage
    so that as the tutorial proceeds, we will be able to illustrate each pattern
    in terms of Core and ORM use together.

    The fundamental transactional/database interactive object when using the ORM is
    called the session. In modern SQLAlchemy, this object is used in a manner
    very similar to that of the Connection, and in fact as the Session is used,
    it refers to a Connection internally which it uses to emit SQL.

    When the Session is used with non-ORM constructs, it passes through the SQL
    statements we give it and does not generally do things much differently from
    how the Connection does directly, so we can illustrate it here in terms
    of the simple textual SQL operaions we've already learned.

    The Session has a few different creational patterns, but here we will illustrate
    the most basic one that tracks exactly with how the Connection is used which is
    to construct it within a context manager.
    '''

    '''
    stmt = text("SELECT x, y FROM some_table WHERE y > :y ORDER BY x, y").bindparams(y=6)
    with Session(engine) as session:
        result = session.execute(stmt)
        for row in result:
            print(f"x: {row.x} y: {row.y}")
    '''

    with Session(engine) as session:
        result = session.execute(
            text("UPDATE some_table SET y=:y WHERE x=:x"),
            [{"x": 9, "y": 11}, {"x": 13, "y": 15}]
        )
        session.commit()

    '''
    The Session obviously has a lot more tricks up its sleeve than that,
    however understanding that it has a Session.execute() method that's used
    the same way as Connection.execute() will get us started with the examples that
    follow later.
    '''


if __name__ == "__main__":
    main()
