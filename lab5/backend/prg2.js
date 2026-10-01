import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";
const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.get("/", (req, res) => {
  res.sendFile(path.join(dirname, "pages", "product.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(dirname, "pages", "contact.html"));
});

app.use((req, res) => {
  res.status(404).send("<h1>404 Page Not Found</h1>");
});

app.listen(4444, () => console.log(`Server is running at 4444`));
