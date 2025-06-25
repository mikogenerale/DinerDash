import { Router } from "express";
import searchRoute from "./search";

const router = Router();

router.use(searchRoute);

export default router;