import httpError from "http-errors";
import knex from "../config/knex";
import { validateRegister } from "./validations";

export const register = async (body: {
  username: string;
  password: string;
}) => {
  validateRegister(body);
  const current_user = await knex("users")
    .whereRaw("LOWER(username) = LOWER(?)", [body.username])
    .first();
  if (current_user) {
    throw new httpError.Conflict("User name aleready exists");
  }
  const user = (
    await knex("users").insert(
      {
        username: body.username.toLocaleLowerCase(),
        password: body.password,
      },
      ["id", "username"]
    )
  )[0];
  return user;
};
