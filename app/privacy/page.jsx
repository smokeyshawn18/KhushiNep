"use client";

import React from "react";
import { Lock, UserCheck, FolderLock, MailOpen, Eye, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 space-y-12 text-sky-800">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold flex items-center gap-3">
          <Lock className="text-sky-700" /> Privacy Policy
        </h1>
        <p className="text-lg">
          This Privacy Policy explains how Khushi Edu Consultancy Pvt. Ltd.
          collects, uses, and protects your personal data.
        </p>
      </section>

      <section className="space-y-8">
        <Card>
          <CardContent className="space-y-3 mt-6">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <UserCheck /> Information We Collect
            </div>
            <p>
              We collect your name, contact info, academic documents, and
              identification to assist you with admissions and visa
              applications.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <FolderLock /> How We Protect Data
            </div>
            <p>
              Your data is encrypted and securely stored in our internal
              systems. Only authorized staff may access it, and we never sell
              your information.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <MailOpen /> Communications
            </div>
            <p>
              We may send you service-related or academic opportunity emails.
              You can unsubscribe anytime by contacting us or using the opt-out
              link.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <Eye /> Your Rights
            </div>
            <p>
              You may request access to or deletion of your personal data.
              Please reach out if you’d like to exercise your rights under
              privacy laws.
            </p>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t pt-4 text-sm text-sky-700 space-y-2">
        <p>Last updated: June 2025</p>
        <p className="flex items-center gap-2">
          <Mail size={16} /> Contact:{" "}
          <a href="mailto:info@khushiedu.com" className="underline">
            info@khushiedu.com
          </a>
        </p>
      </footer>
    </main>
  );
}
