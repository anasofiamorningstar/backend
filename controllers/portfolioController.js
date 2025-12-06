import PortfolioItem from "../models/PortfolioItem.js";

export const getPortfolio = async (req, res) => {
  const items = await PortfolioItem.find();
  res.json(items);
};

export const createPortfolioItem = async (req, res) => {
  const item = await PortfolioItem.create(req.body);
  res.json(item);
};
