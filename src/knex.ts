import Knex from "knex";

const knex = Knex({
  client: "postgresql",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "",
    database: "url_shortener",
  },
});

export const onDatabaseConnect = async () => knex.raw("SELECT 1");

export default knex;
