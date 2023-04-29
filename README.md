# Starter Setup for Your Next Project
- React, Next.js, TailwidCSS, Next-Auth, Prisma, TypeScript and Authentication
### Generate secret codes for Env
[Click this link to generate](https://generate-secret.vercel.app/32)

## Getting Started

- rename `.env.example` to `.env`
- `npm install` or `yarn`
- `npx prisma migrate dev` for database schema migration
- run the development server:

```bash
npm run dev
# or
yarn dev
```

Now, your project is ready with sign in, sign out functions and basic UI. <br />
For registration, API is ready to use.
Trigger POST method  to `'/api/auth/register'` and send data.