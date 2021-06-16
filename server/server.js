require("dotenv").config();
const express = require("express");

const app = express();

app.use((req, res, next) => {
    res.status(404).json({
        status: "fail",
    })
})

app.use((req, res, next) => {
    console.log("This is our second middleware");
    next();
})

app.get("/api/v1/restaurants", (req, res) => {
    console.log("get all restaurants");
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["mcdonalds", "wendys"]
        }
    });
});

// get a restaurant
app.get("/api/v1/restaurants/:restaurant_id", (req, res) => {
    console.log(req.params);
})

// create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req);
})


const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
})