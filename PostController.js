import Post from './Post.js';

class PostController {
  async create(request, response) {
    try {
      const { author, title, content, picture } = request.body;
      const post = await Post.create({ author, title, content, picture });
      response.status(200).json(post);
    } catch (e) {
      response.status(500).json(e);
    }
  }
  async getAll(request, response) {
    try {
      const posts = await Post.find();
      return response.json(posts);
    } catch (e) {
      response.status(500).json(e);
    }
  }
  async getOne(request, response) {
    try {
      const { id } = request.params;
      if (!id) response.status(400).json({ message: 'Id is missing' });
      const post = await Post.findById(id);
      return response.json(post);
    } catch (e) {
      response.status(500).json(e);
    }
  }
  async update(request, response) {
    try {
      const post = request.body;
      if (!post._id) response.status(400).json({ message: 'Id is missing' });
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
        new: true,
      });
      return response.json(updatedPost);
    } catch (e) {
      response.status(500).json(e);
    }
  }
  async delete(request, response) {
    try {
      const { id } = request.params;
      if (!id) response.status(400).json({ message: 'Id is missing' });
      const post = await Post.findByIdAndDelete(id);
      return response.json(post);
    } catch (e) {
      response.status(500).json(e);
    }
  }
}

export default new PostController();
