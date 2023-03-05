import express from "express";
import {
  getTripDataById,
  getFaultCountByTripId,
  getCompletedTrips,
} from "../controllers/tripController.js";

const router = express.Router();

router.get("/getTripById/:id", getTripDataById);
router.get("/getFaultsByTripId/:id", getFaultCountByTripId);
router.get("/getCompletedTrips/", getCompletedTrips);

export default router;
