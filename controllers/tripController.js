import { db } from "../db.js";

export const getTripDataById = (req, res) => {
  const tripId = req.params.id;

  const q = "SELECT * FROM tripdata WHERE trip_id = ?";

  db.query(q, [tripId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const getFaultCountByTripId = (req, res) => {
  const tripID = req.params.id;

  const q =
    "SELECT * FROM tripdata WHERE trip_id = ? AND event != 'IGS' AND event != 'NSQ' AND event != 'LOC' AND event != 'RFID'";

  db.query(q, [tripID], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const getCompletedTrips = (req, res) => {
  const q =
    "SELECT * FROM trip_summary INNER JOIN vehicle_master ON vehicle_master.vehicle_id=trip_summary.vehicle_id WHERE trip_summary.trip_status = ? ORDER BY trip_summary.id DESC";
  const status = 1;
  db.query(q, status, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
};

export const getOngoingTrips = (req, res) => {
  const q =
    "SELECT * FROM trip_summary INNER JOIN vehicle_master ON vehicle_master.vehicle_id=trip_summary.vehicle_id WHERE trip_summary.trip_status = ? ORDER BY trip_summary.id DESC";
  const status = 0;
  db.query(q, status, (err, results) => {
    if (err) return res.json(err);
    return res.json(results);
  });
};

export const getOngoingTripdataById = (req, res) => {
  const tripId = req.params.id;

  const q = "SELECT * FROM tripdata WHERE trip_id = ?";

  db.query(q, [tripId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const endTripById = (req, res) => {
  const tripId = req.params.id;
  const data = req.body;

  const q = "UPDATE trip_summary SET ? WHERE trip_id = ?";

  db.query(q, [data, tripId], (err, results) => {
    if (err) return res.json(err);
    return res.json({
      status: 200,
      message: "Success",
    });
  });
};
