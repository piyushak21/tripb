import express from "express";

import {
  getOngoingTrips,
  getOngoingTripdataById,
  endTripById,
} from "../controllers/tripController.js";

const router = express.Router();

router.get("/getOngoingTrips", getOngoingTrips);
router.get("/getOngoingTripdataById/:id", getOngoingTripdataById);
router.put("/endTripById/:id", endTripById);

export default router;
