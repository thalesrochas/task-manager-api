import { buildRoutePath } from "./utils/buildRoutePath.js";

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/"),
    handler: (_req, res) => {
      return res.writeHead(200).end();
    },
  },
];
