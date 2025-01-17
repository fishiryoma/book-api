const express = require("express");
const app = express();
const port = 3005;
const router = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
    console.log("server running on localhost:3005");
});
