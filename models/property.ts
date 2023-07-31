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
    description:String,
    option:String,
    images:{
      thumbnail:String,
      banner:String,
      banner2:String,
    },
    liked:Boolean,
    category:String,
    price:Number,
    createdBy:String
  },
});

const Properties = mongoose.models.Properties || mongoose.model("Properties", userSchema);

export default Properties;
