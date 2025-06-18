"use client";

import React from "react";
import {
  FileText,
  Handshake,
  BadgeCheck,
  ShieldCheck,
  Scale,
  Mail,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 space-y-12 text-sky-800">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold flex items-center gap-3">
          <FileText className="text-sky-700" /> Terms of Service
        </h1>
        <p className="text-lg">
          Please read these Terms of Service carefully before using the services
          provided by Khushi Edu Consultancy Pvt. Ltd.
        </p>
      </section>

      <section className="space-y-8">
        <Card>
          <CardContent className="space-y-3 mt-6">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <Handshake /> Use of Services
            </div>
            <p>
              By accessing our consultation or visa services, you agree to
              comply with our process guidelines. Misuse or false submissions
              will lead to immediate service suspension.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <BadgeCheck /> Eligibility & Conduct
            </div>
            <p>
              Clients must be eligible to apply for study-abroad programs. Any
              dishonest or misleading behavior may result in cancellation of
              your consultation.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <ShieldCheck /> Limitations of Service
            </div>
            <p>
              While we guide you through documentation, admission, and visa
              procedures, we do not guarantee approvals or admissions by
              external bodies.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <Scale /> Governing Law
            </div>
            <p>
              These Terms are governed by the laws of Nepal. All disputes will
              be handled under the jurisdiction of the courts of Kathmandu.
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
