import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
firstName:String,
lastName:String,
email:String,
password:String
});

const User = mongoose.models.Properties || mongoose.model("Users", userSchema);

export default User;
