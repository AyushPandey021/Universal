const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

});

// Hash the password before saving
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 12);
//   next();
// });

// Compare password for login
// userSchema.methods.comparePassword = function (candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password);
// };

module.exports = mongoose.model("User", userSchema);
