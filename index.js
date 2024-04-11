import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./UserAuth/users/routes.js";
import signinHandler from "./UserAuth/users/routes.js";
import session from "express-session";
import "dotenv/config";

//const signinHandler = require('./UserAuth/users/routes.js');

//mongodb+srv://eshac7:Esha%4012345@cluster0.wua9ytq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//const CONNECTION_STRING = 'mongodb+srv://eshac7:Esha@12345@cluster0.wua9ytq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' || 'mongodb://127.0.0.1:27017/kanbas';
//const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'

//mongoose.connect(CONNECTION_STRING);
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express();
app.use(express.urlencoded({ extended: true }));
const sessionOptions = {
  secret: "some secret",
  saveUninitialized: false,
  resave: false,
};
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
// if (process.env.NODE_ENV !== "development") {
//   sessionOptions.proxy = true;
//   sessionOptions.cookie = {
//     sameSite: "none",
//     secure: true,
//   };
// }

app.use(session(sessionOptions));
app.use(express.json());

signinHandler(app);
app.listen(4000);
