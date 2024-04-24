// books.ts
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { FAKE_TYPES_RESPONSE } from "../lib/fake-data";
import {
  CreateRequestSchema,
  IInstance,
  IdParamSchema
} from "../schemas";

const app = new Hono();

type IDatabase = {
  instances: IInstance[];
};

let BEST_DATABASE_EVER: IDatabase = {
  instances: [],
};

let ID_COUNTER = 0;

app.post("/create", zValidator("json", CreateRequestSchema), (c) => {
  const reqBody = c.req.valid("json");

  // set bogus fields
  const id = ++ID_COUNTER;
  reqBody.id = id.toString();
  reqBody.status = "PENDING";
  reqBody.ip_addr = "127.0.0.1";

  BEST_DATABASE_EVER.instances.push(reqBody);

  return c.json({
    id,
    cloud_assigned_id: id,
  }); // TODO: assert response type somewhere - ICreateResponse
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
  const instanceIdx = BEST_DATABASE_EVER.instances.findIndex(
    (instance: IInstance) => instance.id === id
  );

  if (instanceIdx > -1) {
    BEST_DATABASE_EVER.instances.splice(instanceIdx, 1);
    return c.json({ deleted: id });
  } else {
    return c.notFound();
  }
});

app.get("/types", (c) => {
  return c.json(FAKE_TYPES_RESPONSE);
});

app.get("/", (c) => {
  return c.json(BEST_DATABASE_EVER.instances);
});

export default app;
