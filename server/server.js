require("dotenv").config();
const morgan = require("morgan");
const express = require("express");

const app = express();
app.use(morgan("dev"));

app.use(express.json());

app.get("/api/v1/restaurants", (req, res) => {
  console.log("get all restaurants");
  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["mcdonalds", "wendys"],
    },
  });
});

// get a restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);

  res.status(200).json({
    status: "success",
    data: {
      restaurant: "mcdonalds",
    },
  });
});

// create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);
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
