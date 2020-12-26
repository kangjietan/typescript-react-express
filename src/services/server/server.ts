import express from "express";

import path from "path";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../../client/public")));

app.listen(PORT, () => console.log("Listening on port: " + PORT));
