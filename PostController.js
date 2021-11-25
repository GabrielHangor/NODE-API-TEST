import Post from './Post.js';
import PostService from './PostService.js';

class PostController {
  async create(request, response) {
    try {
      const post = await PostService.create(
        request.body,
        request.files.picture
      );
      response.status(200).json(post);
    } catch (e) {
      response.status(500).json(e);
    }
  }

  async getAll(request, response) {
    try {
      const posts = await PostService.getAll();
      return response.json(posts);
    } catch (e) {
      response.status(500).json(e);
    }
  }

  async getOne(request, response) {
    try {
      const post = await PostService.getOne(request.params.id);
      return response.json(post);
    } catch (e) {
      response.status(500).json(e);
    }
  }

  async update(request, response) {
    try {
      const updatedPost = await PostService.update(request.body);
      return response.json(updatedPost);
    } catch (e) {
      response.status(500).json(e.message);
    }
  }

  async delete(request, response) {
    try {
      const post = await PostService.delete(request.params.id);
      return response.json(post);
    } catch (e) {
      response.status(500).json(e);
    }
  }
}

export default new PostController();
