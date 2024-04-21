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

const app = new Hono();

app.post("/create", zValidator("json", CreateRequestSchema), (c) => {
  return c.json({}); // CreateResponseSchema;
});

app.get(
  "/:id/info",
  zValidator("param", IdParamSchema),
  zValidator("json", CreateRequestSchema),
  (c) => {
    const id = c.req.param("id");
    return c.json({id }); // InfoResponseSchema;
  }
);

app.post("/:id/delete", zValidator("param", IdParamSchema), (c) => {
  const id = c.req.param("id");
  return c.json({}); // xxx;
});

app.get("/types", xxx, (c) => {
  return c.json({}); // TypesResponseSchema;
});

app.get("/instances", xxx, (c) => {
  return c.json({}); // InstancesResponseSchema;
});

export default app;
