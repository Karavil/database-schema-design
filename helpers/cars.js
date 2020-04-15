const config = require("../knexfile");
const db = require("knex")(config.development);

const getCars = () => {
   return db("cars").select("*");
};

const getCar = (vin) => {
   return db("cars").where("VIN", vin.toString());
};

const addCar = (vin, make, model, mileage = 0) => {
   return db("cars")
      .insert({ vin, make, model, mileage })
      .then(() => {
         return getCar(vin);
      });
};

module.exports = {
   getCars,
   getCar,
   addCar,
};
