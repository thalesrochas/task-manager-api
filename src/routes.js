export const routes = [
  {
    method: "GET",
    path: "/",
    handler: (_req, res) => {
      return res.writeHead(200).end();
    },
  },
];
