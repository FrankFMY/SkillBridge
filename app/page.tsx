import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import TopMentors from "@/components/TopMentors";
import Stats from "@/components/Stats";
import Reviews from "@/components/Reviews";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Categories />
        <TopMentors />
        <Stats />
        <Reviews />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
