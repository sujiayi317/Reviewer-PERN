CREATE TABLE products (
    id INT,
    name VARCHAR(50),
    price INT,
    on_sale boolean
);

-- CREATE TABLE restaurants (
--     id INT,
--     name VARCHAR(50),
--     location VARCHAR(50),
--     price_range INT
-- );

CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL CHECK(price_range >= 1 and price_range <= 5)
);

INSERT INTO restaurants (id, name, location, price_range) 
VALUES(123, 'mcdonalds', 'new yorks', 3);

INSERT INTO restaurants (name, location, price_range) 
VALUES('wendys', 'new york', 4);

