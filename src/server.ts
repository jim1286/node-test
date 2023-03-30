import http from "http";
import app from "./app";

try {
  require("./app");
} catch (err) {
  console.error(err);
}

const run = () => {
  const server = http.createServer(app);
  server.listen(3000, () => {
    console.log(`=================================`);
    console.log(`🚀 App listening on the port 3000`);
    console.log(`=================================`);
  });
};

run();
