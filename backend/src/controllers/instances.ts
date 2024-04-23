// books.ts
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import {
  CreateRequestSchema,
  CreateResponseSchema,
  IdParamSchema,
  InfoResponseSchema,
  InstancesResponseSchema,
  TypesResponseSchema,
} from "../schemas";
import { FAKE_TYPES_RESPONSE } from "../lib/fake-data";

const app = new Hono();

let BEST_DATABASE_EVER: any = {
  instances: [],
};

app.post("/create", zValidator("json", CreateRequestSchema), (c) => {
  const reqBody = c.req.valid("json");

  BEST_DATABASE_EVER.instances.push(reqBody)

  return c.json(reqBody);
});

app.get(
  "/:id/info",
  zValidator("param", IdParamSchema),
  zValidator("json", CreateRequestSchema),
  (c) => {
    const id = c.req.param("id");
    return c.json({ id }); // InfoResponseSchema;
  }
);

app.post("/:id/delete", zValidator("param", IdParamSchema), (c) => {
  const id = c.req.param("id");
  return c.json({}); // xxx;
});

app.get("/types", (c) => {
  return c.json(FAKE_TYPES_RESPONSE); // TypesResponseSchema;
});

app.get("/", (c) => {
  return c.json(BEST_DATABASE_EVER.instances); // InstancesResponseSchema;
});

export default app;
