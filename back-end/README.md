# back-end

To install dependencies:

```bash
bun install
```

To run in dev:

```bash
bun dev
```

Directory tree structure:

```text
back-end/
├── .gitignore               # Git ignore rules
├── drizzle/                 # Drizzle ORM migration files
│   ├── meta/
│   └── *.sql
│
├── src/                     # Application source code
│   ├── routes/              # Route definitions (API endpoints)
│   ├── controllers/         # Request handlers / business logic
│   ├── middleware/          # Custom Express middlewares
│   ├── utils/               # Helper and utility functions
│   ├── zod/                 # Zod schemas for validation
│   ├── db/                  # Database client and schema definitions
│   │   ├── schema.ts
│   │   └── dbClient.ts
│   └── index.ts             # Web server entry point
│
├── package.json
├── tsconfig.json
├── drizzle.config.ts        # Drizzle configuration (root)
└── .env
```
