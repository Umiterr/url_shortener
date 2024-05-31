import "dotenv/config";
import knex, { onDatabaseConnect } from "./config/knex";

onDatabaseConnect();
