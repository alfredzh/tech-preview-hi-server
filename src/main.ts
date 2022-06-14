import { startGraphQLServer } from "./apollo";
import { connectDB } from "./data-source";

async function start() {
  await connectDB();

  startGraphQLServer();
}

start();
