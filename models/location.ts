import mongoose from "mongoose";
const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  areas:[],
});

const Location = mongoose.models.Location || mongoose.model("Location", citySchema);

export default Location;
