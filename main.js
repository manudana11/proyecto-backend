const express = require("express");
const { typeError } = require("./middleware/errors");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/users", require("./routes/users"));
app.use("/products", require("./routes/products"));
app.use("/categories", require("./routes/categories"));
app.use("/orders", require("./routes/orders"));

app.use(typeError);

app.listen((PORT), () => console.log(`Server started on port ${PORT}`));