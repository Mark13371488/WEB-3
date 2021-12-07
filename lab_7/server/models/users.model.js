const { Schema, model } = require("mongoose");

const UsersSchema = new Schema(
  {
    username: { type: String },
    password: { type: String },
    addedAt: { type: Date, default: Date.now }
  },
  {
    versionKey: false,
    collection: "UsersCollection"
  }
);

module.exports = model("UsersModel", UsersSchema);
