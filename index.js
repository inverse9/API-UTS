const express = require("express");
const menuRoute = require("./routes/menu");
const userRoute = require("./routes/user");
const orderRoute = require("./routes/order");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (_, res) => res.send("Hello"));
app.use("/menu", menuRoute);
app.use("/users", userRoute);
app.use("/orders", orderRoute);
app.listen(3000, () => console.log("listening on http://localhost:3000"));
