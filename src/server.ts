import http from 'http';
import app from './app';
import { connect } from './database';

try {
  require('./app');
} catch (err) {
  console.error(err);
}

const run = async () => {
  await connect();
  const server = http.createServer(app);
  server.listen(3000, () => {
    console.log(`=================================`);
    console.log(`🚀 App listening on the port 3000`);
    console.log(`=================================`);
  });
};

run();
