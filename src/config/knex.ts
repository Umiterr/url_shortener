import Knex from "knex";

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const knex = Knex({
  client: "postgresql",
  connection: {
    host: DB_HOST,
    port: Number(DB_PORT),
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
  },
});

export const onDatabaseConnect = async () => {
  try {
    // Usar queryBuilder para evitar la advertencia de deprecación
    await knex.queryBuilder().select(knex.raw("1"));
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export default knex;
