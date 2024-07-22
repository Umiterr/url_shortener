import Router from "@koa/router";
import { register } from "../services/users";
import { RegisterBody } from "../types/index";

const authRouter = new Router();

authRouter
  .post("/register", async (ctx) => {
    ctx.response.body = await register(ctx.request.body as RegisterBody);
  })

  .post("/login", async (ctx) => {
    ctx.response.body = await register(ctx.request.body as RegisterBody);
  });

export default authRouter;
