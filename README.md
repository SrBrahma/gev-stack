# gev-stack

Thinking about what the market is using and what is the best...

# The Stack

- [Next.js](https://nextjs.org)
- [Bun](https://bun.sh)
- [Supabase](https://supabase.com)
- [Mantine](https://mantine.dev) - `@mantine/form` included!
- [Stripe](https://stripe.com)
- [Zod](https://github.com/colinhacks/zod)
- [@t3-oss/env-nextjs](https://github.com/t3-oss/t3-env) - Typesafe ENVs!

## Getting Started

1) Clone this project and import it into [Next.js](https://nextjs.org).
1) Go to the settings of this new Next.js project and do the integration with Supabase.
1) Create the given `.env.local` file.

Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Why not

- **Remix?**
    - Remix is a great tool, but unfortunatelly there aren't Remix jobs in the market nowadays. Also, it's less straightforward than Next.js to deploy it.

- **Auth.js?**
    - It's a great tool but if you want to have "Forgot my password" and other auth-email-sending procedures, you need to also connect and setup an email provider. Supabase skips this.

- **Appwrite?**
    - It's a great platform but Supabase has more community support. Also, while both platforms don't support transactions, Supabase at least has RPC.

- **Shadcn & Tailwind CSS?**
    - While they are a great combination, I personaly prefer Mantine for productivity and simplicity.
