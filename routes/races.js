import { Router } from "express";
import { getRace, getRaces, createRace, deleteRace, updateRace } from "../controllers/races.js";

const router = Router();

router.get("/races", getRaces);
router.get("/races/:id", getRace);
router.post("/races", createRace);
router.put("/races/:id", updateRace);
router.delete("/races/:id", deleteRace);

export default router;