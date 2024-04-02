const express = require("express");
const route = require("./routes");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (_, res) => res.send("Hello World"));
app.use("/menu", route);
app.listen(3000, () => console.log("listenig on localhost:3000"));
