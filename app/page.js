import Achievements from "@/components/Achievements";
import Testimonial from "@/components/Testimonial";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/ChooseUs";
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "@/app/seo";

export const metadata = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main className="w-full text-[#010066] bg-white">
      <Hero />
      <div className="w-full flex flex-col items-center gap-12 px-6 py-16">
        <WhyChooseUs />
        <Testimonial />
        <Achievements />
      </div>
    </main>
  );
}
