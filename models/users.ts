import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
firstName:String,
lastName:String,
email:String,
password:String
});

const User = mongoose.models.Users || mongoose.model("Users", userSchema);
export default User;
