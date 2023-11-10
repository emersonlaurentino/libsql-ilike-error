import { eq, ilike } from "drizzle-orm";
import Database from "libsql";
import { db } from "./db";
import { users } from "./db/schema";

export const drizzle = {
  selectUser: async (name: string) => {
    return await db.select().from(users).where(eq(users.name, name));
  },
  searchUser: async (name: string) => {
    return await db
      .select()
      .from(users)
      .where(ilike(users.name, `%${name}%`));
  },
};

const client = new Database("local.db");

export const sqlite = {
  selectUser: (name: string) => {
    return client.prepare("SELECT * FROM users WHERE name = ?").get(name);
  },
  searchUser: (name: string) => {
    return client
      .prepare("SELECT * FROM users WHERE name ILIKE ?")
      .get(`%${name}%`);
  },
};
