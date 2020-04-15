exports.up = function (knex) {
   return knex.schema.createTable("cars", (table) => {
      table.string("VIN").notNullable();
      table.string("make").notNullable();
      table.string("model").notNullable();
      table.integer("mileage").nullable().defaultTo(0);
   });
};

exports.down = function (knex) {
   return knex.schema.dropTable("cars");
};
