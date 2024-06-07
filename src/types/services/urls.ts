import knex from "knex";

export const createShortUR = async (
  body: { url: string; id?: string },
  user_id: number
) => {
  if (!body.url) {
    throw new Error("URL must be provided");
  }
  if (body.id) {
    const current_record = await knex("urls").where({ id: body.id }).first();
    if (current_record) {
      throw new Error(
        "The ID that you provided already exists in the database"
      );
    }
  }
  const results = await knex("urls").insert(
    { url: body.url, id: body.id, user_id },
    "*"
  );
  return results[0];
};

export const resolveURL = async (id: string) => {
  const url = await knex("urls").where({ id }).select(["url"]).first();
  if (!url) {
    throw new Error("The is is not valid");
  }
  return url.url;
};
