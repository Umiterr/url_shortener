import "dotenv/config";

import { onDatabaseConnect } from "./config/knex";

const main = async () => {
  try {
    await onDatabaseConnect();
    console.log("Database connected");
  } catch (e) {
    console.log(e);
  }
};

main();
