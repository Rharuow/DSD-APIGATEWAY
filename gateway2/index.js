const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = 9000;

app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
  console.log("Gateway has started on PORT = ", PORT);
});
