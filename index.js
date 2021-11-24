import express from 'express';
import mongoose from 'mongoose';
import Post from './Post.js';

const PORT = 5000;
const DB_URL =
  'mongodb+srv://user:user@cluster0.4ie6o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();

app.use(express.json());

app.post('/', async (request, response) => {
  try {
    const { author, title, content, picture } = request.body;
    const post = await Post.create({ author, title, content, picture });
    response.status(200).json(post);
  } catch (e) {
    response.status(500).json(e);
  }
});

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log(`THE SERVER STARTED ON PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();
