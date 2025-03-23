const posts = require("../data/posts");

// Index: restituisce la lista dei post in formato JSON
const getAllPosts = (req, res) => {
  res.json(posts);
};

// Show: restituisce un singolo post in formato JSON
const getPostById = (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.slug === id);
  if (!post) {
    return res.status(404).json({ error: "Post non trovato" });
  }
  res.json(post);
};

// Destroy: elimina un singolo post dalla lista, stampa la lista aggiornata e risponde con stato 204
const deletePost = (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex((p) => p.slug === id);
  if (index === -1) {
    return res.status(404).json({ error: "Post non trovato" });
  }
  posts.splice(index, 1);
  console.log("Lista aggiornata dei post:", posts);
  res.status(204).end();
};

// Funzione per creare un nuovo post
const createPost = (req, res) => {
  console.log("Dati:", req.body);
  res.send("Store a new post");
};

const updatePost = (req, res) => {
  res.send(`Update post with ID: ${req.params.id}`);
};

const modifyPost = (req, res) => {
  res.send(`Modify post with ID: ${req.params.id}`);
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  modifyPost,
  deletePost,
};
