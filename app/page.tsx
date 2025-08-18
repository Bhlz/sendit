import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogosTicker from "@/components/LogosTicker";
import Steps from "@/components/Steps";
import Benefits from "@/components/Benefits";
import WaitlistForm from "@/components/WaitlistForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Page(){
  return (
    <main id="contenido" className="relative overflow-hidden hero-gradient">
      <Header />
      <Hero />
      <section className="pt-6 pb-4">
        <LogosTicker />
      </section>
      <Steps />
      <Benefits />
      <section id="waitlist" className="px-6">
        <div className="max-w-5xl mx-auto">
          <WaitlistForm />
        </div>
      </section>
      <FAQ />
      <Footer />
    </main>
  );
}