import mongoose from "mongoose";
import schema from "./schema.js";

// const mongoose = require("mongoose");
// const schema = require('./schema.js');
const model = mongoose.model("UserModel", schema);
//module.exports = model;
export default model;