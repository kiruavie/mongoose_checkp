const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
