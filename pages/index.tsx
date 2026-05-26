import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Advisors from "../components/Advisors";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pestone Signature | Premium Real Estate for Modern Living</title>
        <meta
          name="description"
          value="Find, buy, and invest in quality properties with ease, transparency, and trust with Pestone Signature."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-brand-bg bg-[#E7E5E4] flex flex-col gap-2 pb-16">
        {/* Navigation Bar Component */}
        <Navbar />

        {/* Hero Section Component */}
        <Hero />

        {/* Advisors and Stats Section Component */}
        <Advisors />
      </main>
    </>
  );
}

