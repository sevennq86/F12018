import db from "../db/connection.js";
import Race from "../models/race.js";
import Races from "./races.json" assert { type: "json" };

const insertData = async () => {
  // reset database
  db.dropDatabase();

  // insert races into database
  await Race.insertMany(Races);

  // close db connection (done)
  db.close();
};

insertData();