import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  location: String,
  country: String,
  specifications: {
    room: Number,
    bathRoom: Number,
    area: Number,
    condition: Boolean,
  },
});

const Properties = mongoose.models.Properties || mongoose.model("Properties", userSchema);

export default Properties;
