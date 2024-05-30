import "dotenv/config";
import { onDatabaseConnect } from "./config/knex";

onDatabaseConnect();
