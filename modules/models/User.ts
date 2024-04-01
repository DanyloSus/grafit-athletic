//import from libraries
import mongoose from "mongoose";

//user's schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username must be required"],
  },
  password: { type: String, required: [true, "Password must be required"] },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
