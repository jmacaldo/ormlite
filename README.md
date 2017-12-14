# ormlite
ORM middleware for Sequelize

This app outputs to the terminal - no time to make front-end! ```¯\_(ツ)_/¯```

* Loading main page automatically triggers ```getAll()``` function.

* Test ```findById()``` function by passing an id number as a URL query. Example: http://localhost:3000/id/3

##### Database Schema
* App uses DB called "ormlite" by default.
```
create table test_user (
    id        serial primary key,
    firstname text,
    lastname  text
);

insert into test_user (firstname, lastname) values
    ('jackson', 'pollock'),
    ('sylvia', 'plath'),
    ('daenerys', 'targaryen');
```
You may also have to drop the 'not null' constraint on the 'createdAt' and 'updatedAt' columns that sequelize automatically generates to avoid errors when inserting values with no timestamps.
