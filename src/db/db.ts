import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const turso = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

const readOnlyTurso = createClient({
  url:
    process.env.TURSO_READONLY_DATABASE_URL ?? process.env.TURSO_DATABASE_URL!,
  authToken:
    process.env.TURSO_READONLY_AUTH_TOKEN ?? process.env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(turso);
export const readOnlyDb = drizzle(readOnlyTurso);
