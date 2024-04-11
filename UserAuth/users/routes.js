import * as dao from "./dao.js";

export default function UserRoutes(app) {
  
  const signin = async (req, res) => {
    console.log("signin");
    console.log(req.sessionID);
    const { username, password } = req.body;
    const user = await dao.findUserByCredentials(username, password);
    if (user) {
      req.session.currentUser = user;
      res.json(user);
    } else {
      res.sendStatus(401);
    }
  };

  app.post("/api/users/signin", signin);

}