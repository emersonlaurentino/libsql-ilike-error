import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  driver: "libsql",
  dbCredentials: {
    url: "file:local.db",
  },
  verbose: true,
  strict: true,
});
