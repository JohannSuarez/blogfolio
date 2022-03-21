"""
src: https://docs.sqlalchemy.org/en/14/tutorial/metadata.html
"""

from sqlalchemy import create_engine, text, MetaData, ForeignKey
from sqlalchemy import Table, Column, Integer, String
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


    # Defining Table Metadata with the ORM
    '''
    This ORM-only section will provide an example declaring the
    same database structure illustrated in the previous section,
    using a more ORM-centric configuration paradigm. When using the ORM,
    the process by which we declare Table metadata is usually combined
    with the process of declaring mapped classes. The mapped class
    is any Python class we'd like to create, which will then have attributes
    on it that will be linked to the columns in a database table. Whilethere are
    a few varieties of how this is achieved, the most common style is known as
    declarative, and allows us to declare our user-defined classes and Table
    metadata at once.
    '''
    # Setting up the Registry
    '''
    When using the ORM, the MetaData collection remains present, however
    it itself is contained within an ORM-only object known as the registry.
    We create a registry by constructing it:
    '''

    # mapper_registry = registry()

    '''
    The above registry, when constructed, automatically includes a MetaData
    object that will store a collection of Table objects.
    '''

    # print(mapper_registry.metadata)

    '''
    Instead of declaring Table objects directly, we will now declare them
    indirectly through directives applied to our mapped classes. In the most
    common approach, each mapped class descends from a common base class
    known as the declarative base. We get a new declarative base from
    the registry using the registry.generate_base() method.
    '''
    # Base = mapper_registry.generate_base()

    '''
    The steps of creating the registry and "declarative base" classes
    can be combined into one step using the historically familiar declarative_base()
    function:
    '''
    Base = declarative_base()

    # Declaring Mapped Classes

    '''
    The Base object above is a Python class which will serve
    as the base class for the ORM mapped classes we declare.
    We can now define ORM mapped classes for the user and address table in
    terms of new classes User and Address.
    '''

    class User(Base):
        __tablename__ = 'user_account'

        id = Column(Integer, primary_key=True)
        name = Column(String(30))
        fullname = Column(String(100))

        addresses = relationship("Address", back_populates="user")

        def __repr__(self):
            return f"User(id={self.id!r}, name={self.name!r}, fullname={self.fullname!r})"

    class Address(Base):
        __tablename__ = 'address'

        id = Column(Integer, primary_key=True)
        email_address = Column(String(50), nullable=False)
        user_id = Column(Integer, ForeignKey('user_account.id'))

        user = relationship("User", back_populates="addresses")

        def __repr__(self):
            return f"Address(id={self.id!r}, email_address={self.email_address!r})"

    '''
    The above two classes are now our mapped classes, and are available for use
    in ORM persistence and query operations, which will be described later.
    But they also include Table objects that were generated as part of the declarative
    mapping process, and are equivalent to the ones that we declared directly in the
    previous Core section. We can see these Table objects from a declarative mapped
    class using the .__table__ attribute.
    '''
    print(User.__table__)


    '''
    This Table object was generated from the declarative process
    based on the .__tablename__ attribute defined on each of our classes,
    as well as through the use of Column objects assigned to class-level attributes
    within the classes. These Column objects can usually be declared without an
    explicit "name" field inside the constructor, as the Declarative process
    will name them automatically based on the attribute name that was used.
    '''


    # Emitting DDL to the database
    '''
    This section is named the sane as the section Emitting DDL to the Database
    discussed in terms of Core. This is because emitting DDL with our ORM
    mapped classes is not any different. If we wanted to emit DDL for the Table
    objects we've created as part of our declaratively mapped classes, we can
    still use MetaData.create_all() as before.
    '''

    Base.metadata.create_all(engine)



if __name__ == "__main__":
    main()
