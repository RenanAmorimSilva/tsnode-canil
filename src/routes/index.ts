import { Router } from "express";

import * as PageController from "../controllers/pageCrontroller";
import * as SerchController from "../controllers/searchController";

const router = Router();

router.get("/", PageController.home);
router.get("/dogs", PageController.dogs);
router.get("/cats", PageController.cats);
router.get("/fishes", PageController.fishes);

router.get("/search", SerchController.search);

export default router;
