import { db } from ".";
import { users } from "./schema";

const USERS = ["Emerson", "Mark", "Elon", "Steve"];

function seed() {
  USERS.forEach(async (name) => {
    await db.insert(users).values({ name });
  });
}

seed();
