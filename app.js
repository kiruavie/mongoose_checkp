// import routes from "./src/routes/routes.js";
// import bodyParser from "body-parser";
// import Database from "./src/database/database.js";

const express = require("express");
const { default: Person } = require("./src/models/Person");
const app = express();
const PORT = 4000;

// app.use(bodyParser.json());
// let db = new Database();
app.get("/", (req, res) => {
  res.end("connected");
});

// app.use(routes);

app.listen(PORT, () => {
  console.log("listen to 127.0.0.1:" + PORT);
});

const Person = mongoose.model("Person", personSchema);

const arrayOfPeople = [
  {
    nom: "Vazquez Amani",
    age: 25,
    favoriteFoods: ["Attiéké", "pain grillé", "Porc au four"],
  },
  {
    nom: "Magloire Amani",
    age: 30,
    favoriteFoods: ["Garba", "sauce graine", "sauce gombo"],
  },
  {
    nom: "Harlem Wilshere",
    age: 35,
    favoriteFoods: ["spaghetti", "alloco", "kedjenou"],
  },
];

Person.create(arrayOfPeople)
  .then(() => console.log("document created !"))
  .catch(() => console.error("error"));

Person.find();

Person.findOne();

Person.findOne({ nom: "Harlem" })
  .then((person) => {
    if (person) {
      // document existant, mise à jour
      person.nom = "Vazquez Amani";
      // Continue to the next step
      return person.save();
    } else {
      // Document inexistant
      throw new Error("introuvable");
    }
  })
  .then((updatedPerson) => {
    console.log("User updated:", updatedPerson);
  })
  .catch((error) => {
    console.error("Error updating user:", error);
  });

Person.findOneAndUpdate({ nom: "John Doe" }, { age: 20 }, { new: true })
  .then((personName) => {
    console.log("User updated:", personName);
  })
  .catch((error) => {
    console.error("Error updating user:", error);
  });

Person.findByIdAndRemove(personId)
  .then((removedPerson) => {
    if (removedPerson) {
      console.log("User removed:", removedPerson);
    } else {
      console.log("User not found");
    }
  })
  .catch((error) => {
    console.error("Error deleting user:", error);
  });

Person.deleteMany({ age: { $gt: 30 } })
  .then((deletedData) => {
    console.log("Deleted documents:", deletedData);
  })
  .catch((error) => {
    console.error("Error deleting documents:", error);
  });

Person.find()
  .where("age")
  .gte(25)
  .where("occupation")
  .equals("Engineer")
  .sort("name") //
  .select("name age")
  .exec()
  .then((users) => {
    console.log("Matching users:", users);
  })
  .catch((error) => {
    console.error("Error searching users:", error);
  });
