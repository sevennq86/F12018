import { Router } from "express";
import * as controllers from "../controllers/races.js"

const router = Router();

router.get("/races", races.getCharacters);
router.get("/races/:id", races.getCharacter);
router.post("/races", races.createCharacter);
router.put("/races/:id", races.updateCharacter);
router.delete("/races/:id", races.deleteCharacter);

export default router;