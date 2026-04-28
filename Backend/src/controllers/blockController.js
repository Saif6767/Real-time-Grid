import Block from "../models/Block.js";

export const getBlocks = (req, res) => {
  res.json(Block.getAll());
};