import { Router } from "express";

import * as PageController from "../controllers/pageCrontroller";
import * as SerchController from "../controllers/searchController";

const router = Router();

router.get("/", PageController.home);
router.get("/", PageController.dogs);
router.get("/", PageController.cats);
router.get("/", PageController.fishes);

router.get("/search", SerchController.search);

export default router;
