"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { supabase } from "@/lib/supabase/client";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
      } else {
        router.push("/auth/signin");
      }
      setLoading(false);
    };

    getUser();
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-supabase"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <Button variant="secondary" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Welcome to your dashboard</h2>
              
              <div className="bg-gray-50 p-4 rounded-md mb-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">User Information</h3>
                <p className="text-sm text-gray-900 mb-1">
                  <strong>Email:</strong> {user?.email}
                </p>
                <p className="text-sm text-gray-900 mb-1">
                  <strong>ID:</strong> {user?.id}
                </p>
                <p className="text-sm text-gray-900">
                  <strong>Last Sign In:</strong>{" "}
                  {user?.last_sign_in_at
                    ? new Date(user.last_sign_in_at).toLocaleString()
                    : "N/A"}
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm text-gray-700">
                  This is where you can build your application features. Connect to your
                  Supabase database and start building your app!                
                </p>
                
                <div className="flex space-x-4">
                  <Link href="https://supabase.com/docs" target="_blank">
                    <Button variant="secondary">View Supabase Docs</Button>
                  </Link>
                  <Link href="https://nextjs.org/docs" target="_blank">
                    <Button variant="secondary">View Next.js Docs</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}