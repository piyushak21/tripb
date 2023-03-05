import express from "express";
import {
  getVehicleByTripId,
  getAllVehicles,
} from "../controllers/vehicleController.js";

const router = express.Router();

router.get("/getVehicleByTripID/:id", getVehicleByTripId);

router.get("/", (req, res) => {
  return res.json({ success: "success" });
});

router.get("/getAllVehicles", getAllVehicles);

export default router;
