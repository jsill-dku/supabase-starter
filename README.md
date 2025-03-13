# Supabase Starter

A complete starter template for building applications with Supabase and Next.js 14.

## Features

- Next.js 14 with App Router
- Supabase Authentication (Email & Password)
- Complete auth flows:
  - Sign Up
  - Sign In
  - Sign Out
  - Password Reset
- Tailwind CSS for styling
- TypeScript for type safety
- Sample Dashboard with user information
- Ready-to-use SQL schema for Supabase

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/jsill-dku/supabase-starter.git
cd supabase-starter
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up Supabase

1. Create a new project on [Supabase](https://supabase.com)
2. Copy your project URL and anon key from the project settings
3. Create a `.env.local` file in the project root and add your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. Set up your database schema by running the SQL from `src/app/api/supabase-schema.sql` in the Supabase SQL Editor

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── public/           # Static assets
├── src/
│   ├── app/          # Next.js app router
│   │   ├── api/      # API routes and database schema
│   │   ├── auth/     # Authentication pages
│   │   ├── dashboard/# Dashboard page
│   ├── components/   # Reusable UI components
│   ├── lib/          # Utility functions and library setups
├── .env.example      # Example environment variables
└── README.md         # Project documentation
```

## Authentication Flow

This starter comes with a complete authentication system built with Supabase Auth:

1. **Sign Up**: Users can create a new account with email and password
2. **Email Verification**: Requires email verification (configure in Supabase dashboard)
3. **Sign In**: Password-based authentication
4. **Password Reset**: Forgot password flow with email-based reset
5. **Protected Routes**: Dashboard is protected and requires authentication

## Customizing

### Styling

This project uses Tailwind CSS for styling. The main theme colors and styles can be customized in `tailwind.config.js`.

### Database Schema

Check the sample schema in `src/app/api/supabase-schema.sql`. You can modify this file to add your own tables and security policies.

### Adding Features

The basic authentication and user management is already set up. You can extend the application by:

1. Adding new database tables in Supabase
2. Creating new API routes in `src/app/api/`
3. Building new UI components in `src/components/`

## Deployment

This application can be easily deployed to Vercel or any other Next.js-compatible hosting platform.

For Vercel deployment:

1. Push your code to a Git repository
2. Import the project in Vercel
3. Set your environment variables in the Vercel dashboard

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT