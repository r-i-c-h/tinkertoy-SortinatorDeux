const server = require('./app');
const PORT = 1337;

server.listen(PORT, () => console.log(`Server now up and listening on port ${PORT}`));
