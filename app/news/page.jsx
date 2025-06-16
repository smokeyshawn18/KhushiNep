"use client";

import { Facebook, Newspaper, Calendar, Clock, Tag } from "lucide-react";
import { motion } from "framer-motion";

const newsItems = [
  {
    id: 1,
    title: "📢 New Scholarship Programs Open for 2025 Applicants!",
    date: "2025-06-15",
    tag: "Scholarships",
    summary:
      "Khushi Education Consultancy is thrilled to announce new scholarship opportunities for Nepali students aiming to study in Japan. These programs cover tuition, living expenses, and travel allowances. Apply early to maximize your chances!",
  },
  {
    id: 2,
    title: "🎓 JLPT N4 & N5 Preparation Workshops Starting Soon",
    date: "2025-06-10",
    tag: "Workshops",
    summary:
      "Get ready to ace your JLPT exams with our comprehensive coaching classes. Designed for beginners and intermediate learners, our workshops provide exam strategies, practice tests, and personalized feedback to boost your confidence.",
  },
  {
    id: 3,
    title: "✈️ Visa Assistance Services Now Available with Fast-Track Options",
    date: "2025-06-05",
    tag: "Visa",
    summary:
      "Navigating student visa processes can be complex. Our expert team now offers fast-track visa application support, ensuring all your documentation is error-free and submitted on time to avoid delays.",
  },
  {
    id: 4,
    title: "🏫 Guide: How to Choose the Right University for Your Career",
    date: "2025-06-01",
    tag: "Guidance",
    summary:
      "Choosing a university is a life-changing decision. Learn how to align your academic interests, budget, and career goals to pick the best institution in Japan. Our counselors offer one-on-one sessions to help you decide.",
  },
  {
    id: 5,
    title: "📅 Upcoming Cultural Exchange Events and Webinars",
    date: "2025-05-28",
    tag: "Events",
    summary:
      "Join our cultural exchange programs to experience Japanese traditions firsthand. We also host monthly webinars with alumni sharing their study abroad experiences and tips for success.",
  },
];

export default function NewsSection() {
  return (
    <section
      id="news"
      className="bg-white dark:bg-gray-900 py-14 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-sky-800 mb-10 flex items-center gap-3"
      >
        <Newspaper className="w-10 h-10 text-sky-700" />
        Latest News & Updates
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* News Articles */}
        {/* <div className="space-y-8">
          {newsItems.map(({ id, title, date, tag, summary }) => (
            <motion.article
              key={id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: id * 0.15 }}
              className="p-6 rounded-lg border border-sky-300 shadow-md hover:shadow-xl transition-shadow cursor-pointer group bg-sky-50 dark:bg-gray-800"
            >
              <h3 className="text-2xl font-semibold text-sky-800 group-hover:text-sky-900 transition-colors mb-2">
                {title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-sm text-sky-600 dark:text-sky-400 mb-4">
                <Calendar className="w-4 h-4" />
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString()}
                </time>
                <Tag className="w-4 h-4" />
                <span>{tag}</span>
                <Clock className="w-4 h-4" />
                <span>Updated recently</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {summary}
              </p>
            </motion.article>
          ))}
        </div> */}

        {/* Facebook Page Embed */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl shadow-lg border border-gray-300 overflow-hidden"
          style={{ aspectRatio: "1/1" }}
        >
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61558940106593%26comment_id%3DY29tbWVudDoxMjIxNjc0NTQyNTIyOTgwMDNfOTQ1NDMzNDM1ODAwNzAxMQ%253D%253D&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            title="Khushi Education Consultancy Facebook"
            width="100%"
            height="100%"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            className="w-full h-full"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
