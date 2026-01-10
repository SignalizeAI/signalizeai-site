import About from "@/components/About";
// import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
// import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
// import Team from "@/components/Team";
// import Testimonials from "@/components/Testimonials";
// import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SignalizeAI",
  description:
    "SignalizeAI is the Chrome extension that turns any business website into clear, actionable sales intelligence in seconds by analyzing website content using AI.",
};

export default function Home() {
  // const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <CallToAction />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <Faq />
      {/* <Team /> */}
      {/* <HomeBlogSection posts={posts} /> */}
      <Contact />
      {/* <Clients /> */}
      <section
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <h1>SignalizeAI</h1>

        <p>
          SignalizeAI is an AI-powered Chrome extension that analyzes business
          websites to understand what a company does, who it is built for, and
          how effectively it communicates its value.
        </p>

        <p>
          By reading page content, headings, and structure, SignalizeAI generates
          clear summaries, identifies target customers, and evaluates whether a
          business is ready for sales conversations.
        </p>

        <h2>Key Capabilities</h2>

        <p>
          SignalizeAI transforms raw website content into actionable sales
          intelligence, including value propositions, audience insights, and
          positioning clarity.
        </p>

        <p>
          This helps founders, marketers, and sales teams quickly assess market
          fit and improve messaging without manual research.
        </p>

        <h2>Who It Is For</h2>

        <p>
          SignalizeAI is designed for professionals who need fast and accurate
          insights into business websites, including sales teams, consultants,
          and growth-focused founders.
        </p>
      </section>
    </main>
  );
}
