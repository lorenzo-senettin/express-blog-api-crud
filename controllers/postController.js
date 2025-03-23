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

// Create: aggiunge un nuovo post al blog e restituisce il post creato con status 201
const createPost = (req, res) => {
  const newPost = req.body;
  posts.push(newPost);
  console.log("Dati:", newPost);
  res.status(201).json(newPost);
};

// Update: sostituisce un post esistente con i dati inviati e restituisce il post aggiornato
const updatePost = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const index = posts.findIndex((p) => p.slug === id);
  if (index === -1) {
    return res.status(404).json({ error: "Post non trovato" });
  }
  posts[index] = updatedData;
  res.status(200).json(updatedData);
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
