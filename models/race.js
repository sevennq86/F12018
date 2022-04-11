import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Race = new Schema({
  location: { type: String },
  podiumResults: { type: String },
  fastestLap: { type: String },
  fastestPitStop: { type: String },
  laps: { type: Number },
  round: { type: Number },

});

export default mongoose.model("races", Race);