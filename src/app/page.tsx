import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <main className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Supabase Starter</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A complete starter template with Next.js 14, Supabase Auth, and
            database integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Authentication</h2>
            <p className="text-gray-600 mb-4">
              Ready-to-use authentication with Supabase Auth. Sign up, sign in,
              and manage users with ease.
            </p>
            <div className="flex space-x-3">
              <Link href="/auth/signup">
                <Button variant="primary">Sign Up</Button>
              </Link>
              <Link href="/auth/signin">
                <Button variant="secondary">Sign In</Button>
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Database</h2>
            <p className="text-gray-600 mb-4">
              Integrated with Supabase database for storing and retrieving data
              with built-in Row Level Security.
            </p>
            <Link href="/dashboard">
              <Button variant="primary">Dashboard</Button>
            </Link>
          </div>
        </div>
        
        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-gray-500">
            Get started by editing the files in the{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded">src/</code> directory
          </p>
        </div>
      </main>
    </div>
  );
}