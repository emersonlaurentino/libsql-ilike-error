# libsql ilkie error

This repository tries to show that there is a bug in ILIKE in sqlite.

## Benchmark

- Turso + Drizzle
- libsql-js

## How to reproduce?

1. Install dependencies

```cmd
bun install
```

2. Push the drizzle schema

```cmd
bun run db:push
```

3. Insert the seed data

```cmd
bun run db:seed
```

4. Run the test file

```cmd
bun test
```