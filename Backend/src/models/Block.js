const GRID_SIZE = 20;

class BlockModel {
  constructor() {
    // blocks create
    this.blocks = Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, i) => ({
      id: i,             // unique block id
      color: "#1e293b",   // default color
      owner: null,        
    }));
  }

  // returns all blocks
  getAll() {
    return this.blocks;
  }

  // returns block by id
  getById(id) {
    return this.blocks.find(b => b.id === id);
  }

  // claims a block by id for a user
  claim(id, user) {
  const block = this.getById(id);

  if (!block) return null;

  // already claimed? STOP
  if (block.owner) return null;

  // block assign
  block.owner = user.id;
  block.color = user.color;

  // updated block
  return block;
}
}

export default new BlockModel();