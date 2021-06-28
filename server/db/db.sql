CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL CHECK(rating >= 1 and rating <= 5)
);

INSERT INTO reviews (name, review, rating) VALUES ('carl', 'restaurant was awesome', 5);

select * from reviews;


drop table reviews;

CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL CHECK(rating >= 1 and rating <= 5)
);

INSERT INTO reviews (restaurant_id, name, review, rating) VALUES (9000, 'joann','bad restaurant', 4);
-- ERROR:  insert or update on table "reviews" violates foreign key constraint "reviews_restaurant_id_fkey"
-- DETAIL:  Key (restaurant_id)=(9000) is not present in table "restaurants".


INSERT INTO reviews (restaurant_id, name, review, rating) VALUES (1, 'joann','bad restaurant', 4);

select * from reviews;

INSERT INTO reviews (restaurant_id, name, review, rating) VALUES (1, 'mike','bad restaurant', 4);
INSERT INTO reviews (restaurant_id, name, review, rating) VALUES (1, 'denise','bad restaurant', 4);

INSERT INTO reviews (restaurant_id, name, review, rating) VALUES (2, 'steve','bad restaurant', 4);
INSERT INTO reviews (restaurant_id, name, review, rating) VALUES (2, 'denise','bad restaurant', 4);
INSERT INTO reviews (restaurant_id, name, review, rating) VALUES (2, 'mike','bad restaurant', 4);

select * from reviews where restaurant_id = 1;