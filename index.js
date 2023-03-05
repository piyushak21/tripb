import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import vehiclesRoutes from "./routes/vehicles.js";
import completedTripRoutes from "./routes/completedTrip.js";
import ongoingTripRoutes from "./routes/ongoingTrip.js";
import cookieParser from "cookie-parser";
import tripmqtt from "./controllers/tripmqtt.js";
// import testmqtt from "./controllers/testmqtt.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/vehicles", vehiclesRoutes);
app.use("/api/completedTrip", completedTripRoutes);
app.use("/api/ongoingTrip", ongoingTripRoutes);
// continuos realtime data from devices
tripmqtt();
// testmqtt();

app.listen(9001, () => {
  console.log("Connected");
});
