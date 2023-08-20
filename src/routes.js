import { randomUUID } from "node:crypto";
import { Database } from "./database.js";
import { buildRoutePath } from "./utils/buildRoutePath.js";

const database = new Database();

export const routes = [
  {
    method: "POST",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => {
      const { title, description } = req.body;

      if (!title || !description) {
        return res.writeHead(400).end(
          JSON.stringify({
            error: "`title` and `description` required!",
          })
        );
      }

      const task = {
        id: randomUUID(),
        title,
        description,
        completedAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      database.insert("tasks", task);

      return res.writeHead(201).end();
    },
  },
  {
    method: "GET",
    path: buildRoutePath("/tasks"),
    handler: (_req, res) => {
      const tasks = database.select("tasks");

      return res.end(JSON.stringify(tasks));
    },
  },
  {
    method: "PUT",
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;

      const task = database.select("tasks", id);

      if (!task) {
        return res
          .writeHead(404)
          .end(JSON.stringify({ error: "Id not found!" }));
      }

      const { title, description } = req.body;

      if (!title || !description) {
        return res.writeHead(400).end(
          JSON.stringify({
            error: "`title` and `description` required!",
          })
        );
      }

      const updatedTask = {
        ...task,
        description,
        title,
        updatedAt: new Date(),
      };

      database.update("tasks", id, updatedTask);

      return res.writeHead(204).end();
    },
  },
  {
    method: "DELETE",
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;

      const task = database.select("tasks", id);

      if (!task) {
        return res
          .writeHead(404)
          .end(JSON.stringify({ error: "Id not found!" }));
      }

      database.delete("tasks", id);

      return res.writeHead(204).end();
    },
  },
  {
    method: "PATCH",
    path: buildRoutePath("/tasks/:id/complete"),
    handler: (req, res) => {
      const { id } = req.params;

      const task = database.select("tasks", id);

      if (!task) {
        return res
          .writeHead(404)
          .end(JSON.stringify({ error: "Id not found!" }));
      }

      const updatedTask = {
        ...task,
        completedAt: new Date(),
        updatedAt: new Date(),
      };

      database.update("tasks", id, updatedTask);

      return res.writeHead(204).end();
    },
  },
];
