const express = require("express");
const helmet = require("helmet");

const { getCars, getCar, addCar } = require("./helpers/cars");

const server = express();
server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
   getCars()
      .then((cars) => res.status(200).json(cars))
      .catch((err) => {
         res.status(500).json({ message: "Error while fetching cars" });
      });
});

server.get("/:vim", (req, res) => {
   getCar(req.params.vim)
      .then((car) => res.status(200).json(car))
      .catch((err) => {
         res.status(500).json({ message: "Error while fetching car" });
      });
});

server.post("/", (req, res) => {
   const { vin, make, model, mileage } = req.body;
   addCar(vin, make, model, mileage)
      .then((newcar) => res.status(201).json(newcar))
      .catch((err) => {
         console.log(err);
         res.status(400).json({
            message:
               "Error while adding car. Please make sure to include a vim, make, model and mileage.",
         });
      });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
   console.log(`\n== API running on port ${PORT} ==\n`);
});
