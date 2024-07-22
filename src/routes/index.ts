import Router from "@koa/router";
import authRouter from "./auth";
import urlsRouter from "./urls";

const router = new Router();

router.use("/auth", authRouter.routes(), authRouter.allowedMethods());

router.use("/urls", urlsRouter.routes(), urlsRouter.allowedMethods());

router.use("/visits");

export default router;
