const getAllPosts = (req, res) => {
  res.send("Return all post");
};

const getPostById = (req, res) => {
  res.send(`Return post with ID: ${req.params.id}`);
};

const createPost = (req, res) => {
  res.send("Store a new post");
};

const updatePost = (req, res) => {
  res.send(`Update post with ID: ${req.params.id}`);
};

const modifyPost = (req, res) => {
  res.send(`Modify post with ID: ${req.params.id}`);
};

const deletePost = (req, res) => {
  res.send(`Delete post with ID: ${req.params.id}`);
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  modifyPost,
  deletePost,
};
