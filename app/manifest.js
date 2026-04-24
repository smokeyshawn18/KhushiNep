export default function manifest() {
  return {
    name: "Khushi Edu Consultancy Pvt. Ltd",
    short_name: "Khushi",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#7D0552",
    description:
      "Khushi is an educational website guiding students to study and work in Japan.",
    icons: [
      {
        src: "/icons/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/icons/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
