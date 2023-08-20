import { parse } from "csv-parse";
import { createReadStream } from "node:fs";

const csvPath = new URL("./tasks.csv", import.meta.url);

(async () => {
  const fileStream = createReadStream(csvPath);
  const csvParser = parse({ fromLine: 2, skipEmptyLines: true });

  const records = fileStream.pipe(csvParser);

  for await (const [title, description] of records) {
    await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ title, description }),
    });
  }
})();
