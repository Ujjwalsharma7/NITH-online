const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      required: true,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj8_-jgx2pIGL-m2FmOlRN5TmCuKtE8K0rlAB08N8RUw&s",
    },
  },
  { timestamo: true }
);
const User = mongoose.model("User", userSchema);

module.exports = User;
