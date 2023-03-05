import { db } from "../db.js";

export const getVehicleByDeviceId = (device_id) => {
  const q = `SELECT vehicle_id, user_id, ecu, iot FROM vehicle_master WHERE ecu = ? OR iot = ?`;
  db.query(q, device_id, (err, data) => {
    if (err) return err;
    return data;
  });
};

export const getVehicleByTripId = (req, res) => {
  const tripId = req.params.id;
  const q = `SELECT * FROM vehicle_master INNER JOIN trip_summary ON trip_summary.vehicle_id=vehicle_master.vehicle_id WHERE trip_summary.trip_id = ?`;
  db.query(q, tripId, (err, data) => {
    if (err) return err;
    return res.json(data);
  });
};

export const getAllVehicles = (req, res) => {
  const q = "SELECT * FROM vehicle_master WHERE status = ?";
  let status = 1;
  db.query(q, status, (err, results) => {
    if (err) return err;
    return res.json(results);
  });
};
