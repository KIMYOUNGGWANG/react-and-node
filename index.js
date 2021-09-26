const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const { User } = require("./models/User");
const config = require("./config/key");
// apllication/x-www-form-urlencoded분석해서 가져옴
app.use(bodyParser.urlencoded({ extended: true }));
// aplication/json 타입을 분석해서 가져옴
app.use(bodyParser.json());

// mongoose 이용해 mongDB랑연결
const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB"))
  .catch((err) => console.log(err, "error"));

app.get("/", (req, res) => res.send("Hello World"));

// 회원가입을 위한 router
app.post("/register", (req, res) => {
  // 회원가입에 필요한 정보를 client에서 가져오면 그것들을 db에 넣어준다.
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return err.json({ sucess: false, err });
    return res.status(200).json({ sucess: true });
  });
});

app.listen(port, () => console.log(`Example app listening on port${port}`));
