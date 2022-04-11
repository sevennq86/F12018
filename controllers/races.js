  
import Race from "../models/race.js";

export const getRaces = async (req, res) => {
  try {
  const Races = await Race.find();
  res.json(Races);
} catch (error) {
  console.log(error);
  res.status(500).json({ error: error.message });
  }
};

export const getRace = async (req, res) => {
  try {
    const { id } = req.params;
    const race = await Race.findById(id);

    if (arcade) {
      return res.json(arcade);
    }

    res.status(400).json({ message: "Race not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createRace = async (req, res) => {
try {
    const race = new Race(req.body);
    await race.save();
    res.status(201).json(race);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateRace = async (req, res) => {
  const { id } = req.params;
  const race = await Race.findByIdAndUpdate(id, req.body);
  res.status(200).json(race);
};

export const deleteRace = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Race.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Race deleted!");
    }

    throw new Error("Race not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
