require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const db = require("./db");

const app = express();
app.use(morgan("dev"));

// use this middleware so that the body in the post request will become
// a javascript object that is attached to the req.body:
app.use(express.json());

// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("select * from restaurants");
    console.log(results);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurant: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// get a restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
  console.log(req.params);

  try {
    const results = await db.query("select * from restaurants where id = $1", [
      req.params.id,
    ]);
    console.log(results.rows[0]);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// create a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      "INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *",
      [req.body.name, req.body.location, req.body.price_range]
    );
    console.log(results);

    res.status(201).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// update restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: {
      restaurant: "mcdonalds",
    },
  });
});

// delete a restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);

  res.status(204).json({
    status: "success",
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});
