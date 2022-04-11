import { Router } from "express";
import racesRoutes from "./races.js";


const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", racesRoutes);


export default router;
