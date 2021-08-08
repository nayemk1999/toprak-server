const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

dotenv.config();
const port = process.env.PORT || 5050;

// mongodb+srv://toprak:toprak@cluster0.h0ryv.mongodb.net/toprak?retryWrites=true&w=majority

const mongoURL = process.env.MONGO_URL;

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

// middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

app.use("/user", userRoute);
app.use("/auth", authRoute);

app.listen(port, () => {
  console.log("Listening");
});
