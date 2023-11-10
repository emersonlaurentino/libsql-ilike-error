import { describe, expect, test } from "bun:test";
import { drizzle, sqlite } from ".";

const name = "Emerson";

describe("drizzle", () => {
  test("select user", async () => {
    const result = await drizzle.selectUser(name);
    const includes = result.some((item) => item.name === name);
    expect(includes).toBe(true);
  });
  test("search user", async () => {
    const result = await drizzle.searchUser("son");
    const includes = result.some((item) => item.name === name);
    expect(includes).toBe(true);
  });
});

describe("sqlite", () => {
  test("select user", () => {
    const result: any = sqlite.selectUser(name);
    expect(result.name).toBe(name);
  });
  test("search user", () => {
    const result: any = sqlite.searchUser("son");
    expect(result.name).toBe(name);
  });
});
