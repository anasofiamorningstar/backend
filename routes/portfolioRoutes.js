import express from "express";
import { getPortfolio, createPortfolioItem } from "../controllers/portfolioController.js";

const router = express.Router();

router.get("/", getPortfolio);
router.post("/", createPortfolioItem);

export default router;
