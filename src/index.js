import express from 'express';

import userRoutes from './routes/users.js';

const server = express();

server.use('/users', userRoutes);

server.listen(8081, () => {
    console.log('express is up and running!')
});
