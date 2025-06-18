"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { supabase } from "@/utils/supabaseClient";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASS || "";

// Message Card Component
function MessageCard({ msg, index, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    await onDelete(msg.id);
    setIsOpen(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <article
          className="cursor-pointer shadow-sm hover:shadow-md transition-shadow border rounded-lg bg-white"
          onClick={() => setIsOpen(true)}
          tabIndex={0}
          aria-label={`View message from ${msg.name}`}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsOpen(true);
            }
          }}
        >
          <CardContent className="p-4 space-y-2">
            <p className="text-xs text-gray-400 font-mono font-semibold">
              #{index + 1}
            </p>
            <h3 className="text-lg font-bold text-gray-800">
              {msg.name}{" "}
              <span className="text-gray-500 text-sm">({msg.phone})</span>
            </h3>
            <p className="text-sm text-sky-700 truncate font-medium">
              {msg.email}
            </p>
            <p className="text-xs text-gray-500 font-medium">
              {new Date(msg.created_at).toLocaleString()}
            </p>
            <p className="text-gray-700 line-clamp-2 font-medium">
              {msg.message}
            </p>
          </CardContent>
        </article>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-bold">
            Message from {msg.name} ({msg.phone})
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base leading-relaxed font-semibold mt-4">
            <p>
              <strong>Email: </strong>
              <Link
                href={`mailto:${msg.email}`}
                className="text-blue-600 underline"
              >
                {msg.email}
              </Link>
            </p>
            <p className="mt-2 text-gray-600 font-medium">
              Sent on {new Date(msg.created_at).toLocaleString()}
            </p>
            <hr className="my-4" />
            <p className="whitespace-pre-wrap text-gray-900 font-medium">
              {msg.message}
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="mt-6">
          <AlertDialogCancel className="text-base">Close</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 focus:ring-red-600 text-base"
          >
            <Trash2 className="mr-2 w-4 h-4" /> Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

// Admin Page
export default function AdminPage() {
  const [auth, setAuth] = useState(false);
  const [pwd, setPwd] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Check localStorage auth
  useEffect(() => {
    const stored = localStorage.getItem("admin-auth");
    const expiry = localStorage.getItem("admin-auth-expiry");

    if (stored === "true" && expiry && Date.now() < parseInt(expiry)) {
      setAuth(true);
    }
  }, []);

  // Fetch messages
  const fetchMessages = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      setMessages(data || []);
    } catch {
      toast.error("Failed to load messages");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (auth) fetchMessages();
  }, [auth, fetchMessages]);

  const handleLogin = () => {
    if (pwd === correctPassword) {
      setAuth(true);
      localStorage.setItem("admin-auth", "true");
      localStorage.setItem(
        "admin-auth-expiry",
        (Date.now() + 30 * 60 * 1000).toString()
      );
      toast.success("Logged in");
      setPwd("");
    } else {
      toast.error("Incorrect password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin-auth");
    localStorage.removeItem("admin-auth-expiry");
    setAuth(false);
    setPwd("");
    toast("Logged out");
  };

  const deleteMessage = async (id) => {
    try {
      const { error } = await supabase.from("messages").delete().eq("id", id);
      if (error) throw error;
      setMessages((prev) => prev.filter((m) => m.id !== id));
      toast.success("Message deleted");
    } catch {
      toast.error("Failed to delete message");
    }
  };

  // Unauthenticated
  if (!auth) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-red-700 px-4">
        <section className="max-w-sm w-full bg-white rounded-lg shadow-lg p-8 space-y-6">
          <div className="text-center">
            <Image
              src="/IMAGES/LOGO.jpg"
              width={100}
              height={100}
              alt="Logo"
              className="mx-auto"
            />
            <h1 className="text-2xl font-extrabold text-gray-800 mt-4">
              Admin Login
            </h1>
          </div>
          <input
            type="password"
            placeholder="Enter admin password"
            aria-label="Admin password"
            className="w-full px-4 py-3 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          />
          <Button
            onClick={handleLogin}
            className="w-full text-lg font-semibold"
          >
            Login
          </Button>
        </section>
      </main>
    );
  }

  // Authenticated
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <header className="max-w-6xl mx-auto flex items-center justify-between mb-10">
        <div className="flex items-center space-x-4">
          <Image src="/IMAGES/LOGO.jpg" width={70} height={70} alt="Logo" />
          <h1 className="text-3xl font-extrabold text-gray-800">
            Admin Dashboard
          </h1>
        </div>
        <Button
          variant="destructive"
          onClick={handleLogout}
          className="text-base font-semibold"
        >
          Logout
        </Button>
      </header>

      <section aria-label="Messages" className="max-w-6xl mx-auto">
        {loading ? (
          <p className="text-center text-gray-500 text-lg font-medium">
            Loading messages...
          </p>
        ) : messages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {messages.map((msg, index) => (
              <MessageCard
                key={msg.id}
                msg={msg}
                index={index}
                onDelete={deleteMessage}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-20 text-lg font-medium">
            No messages found.
          </p>
        )}
      </section>
    </main>
  );
}
