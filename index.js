import express from 'express';

const PORT = 5000;
const app = express();

app.post('/', (request, response) => {
  console.log(request.body);
  response.status(200).json('Server is working');
});

app.listen(PORT, () => console.log(`THE SERVER STARTED ON PORT ${PORT}`));
