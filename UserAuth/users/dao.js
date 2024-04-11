import model from "./model.js";
//const model = require('./model.js');
export const findUserByCredentials = (username, password) =>  model.findOne({ username, password });
