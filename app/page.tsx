import {
  AboutUs,
  Blog,
  Features,
  Hero,
  Metrics,
  NewLetter,
  OurExperts,
  Testimonials,
} from "@/components";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Hero />
      <div className="p-2 sm:p-4">
        <Features />
      </div>
      <AboutUs />
      <Metrics />
      <div className="p-2 sm:p-4 bg-neutral-50">
        <Testimonials />
      </div>
      <OurExperts />
      <div className="p-4 bg-secondary-950">
        <NewLetter />
      </div>

      <Blog />
    </main>
  );
}
