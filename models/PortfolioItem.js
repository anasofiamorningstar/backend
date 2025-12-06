import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
  type: String, // "musica", "dibujo", "foto", "video"
  link: String // enlace a Spotify, YouTube, etc.
});

export default mongoose.model("PortfolioItem", portfolioSchema);
