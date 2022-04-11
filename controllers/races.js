  
import Race from "../models/race.js";

export const getRaces = async (req, res) => {
  try {
  const races = await Race.find({});
  res.json(races);
} catch (error) {
  console.log(error);
  res.status(500).json({ error: error.message });
  }
};

export const getRace = async (req, res) => {
  try {
    const getARace = await Race.findById(req.params.id);

    if (getARace) {
      return res.json(getARace);
    }

    res.status(400).json({ message: "Race not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createRace = async (req, res) => {
try {
    const Race = new Race(req.body);
    await Race.save();
    res.status(201).json(Race);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateRace = async (req, res) => {
  const { id } = req.params;
  const Race = await Race.findByIdAndUpdate(id, req.body);
  res.status(200).json(Race);
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
