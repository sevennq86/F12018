import { Router } from "express";
import * as controllers from "../controllers/races.js"

const router = Router();

router.get("/races", races.getRaces);
router.get("/races/:id", races.getRace);
router.post("/races", races.createRace);
router.put("/races/:id", races.updateRace);
router.delete("/races/:id", races.deleteRace);

export default router;