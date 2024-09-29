import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

interface IUser {
  _id: Schema.Types.ObjectId;
  firstname: String;
  lastname: String;
  email: String;
  password: String;
  phoneNumber?: String;
  role: String;
  profile_img: String;
  address: String;
  otp: String;
  passwordResetToken: String;
  passwordResetTokenExpire: Date;
  updated_at: Date;
  created_at: Date;
}

const userSchema = new Schema<IUser>({
  firstname: {
    type: String,
    required: [true, "Hereglegchiin neriig zaaval oruulna."],
  },
  lastname: {
    type: String,
    required: [true, "Hereglegchiin ovogiig zaaval oruulna."],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Hereglegchiin email hayagiig zaaval oruulna."],
  },
  password: {
    type: String,
    minlength: [8, "Hereglegchiin nuuts ug hamgiin bagadaa 8 temdegt baina"],
    required: [true, "Hereglegchiin nuuts ugiig zaaval oruulna."],
  },
  phoneNumber: Number,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  profile_img: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1721332149069-a470150ef51c?q=80&w=4330&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  address: String,
  otp: { type: String, default: "" },
  passwordResetToken: { type: String, default: "" },
  passwordResetTokenExpire: { type: Date, default: undefined },
  updated_at: {
    type: Date,
    dafault: Date.now,
  },
  created_at: {
    type: Date,
    dafault: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    next();
  } else {
    const hashedPassword = bcrypt.hashSync(this.password.toString(), 10);
    this.password = hashedPassword;
    next();
  }
});

const User = model("user", userSchema);

export default User;
