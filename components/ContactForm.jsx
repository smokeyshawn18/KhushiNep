"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, MailCheck, XCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [respMsg, setRespMsg] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setRespMsg(data.message);

    if (res.ok) {
      setForm({ name: "", email: "", phone: "", message: "" });
      setShowPopup(true);
    }

    setLoading(false);
  };

  const closePopup = () => setShowPopup(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-900 via-blue-700 to-sky-600 p-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 relative"
      >
        <div className="flex justify-center mb-6">
          <Image
            src="/IMAGES/LOGO.jpg"
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full shadow-md"
          />
        </div>

        <h2 className="text-center text-3xl font-bold text-blue-900">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
          {["name", "email", "phone"].map((field) => (
            <input
              key={field}
              name={field}
              type={field === "email" ? "email" : "text"}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          ))}

          <textarea
            name="message"
            rows="4"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-900 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition duration-300 flex justify-center items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin h-5 w-5" />
                Sending...
              </>
            ) : (
              <>
                <MailCheck className="h-5 w-5" />
                Send Message
              </>
            )}
          </button>

          {respMsg && (
            <p className="text-center text-blue-800 mt-3 font-medium">
              {respMsg}
            </p>
          )}
        </form>
      </motion.div>

      {/* Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 w-80 text-center relative shadow-xl"
            >
              <Image
                src="/IMAGES/LOGO.jpg"
                alt="Logo"
                width={80}
                height={80}
                className="mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-700 mb-4">
                Your message has been sent successfully.
              </p>
              <button
                onClick={closePopup}
                className="bg-blue-900 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition duration-300 flex items-center justify-center gap-2 mx-auto"
              >
                <XCircle className="h-5 w-5" />
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
