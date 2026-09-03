import About from "@/components/About/About";
import FAQ from "@/components/FAQ/FAQ";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import Reviews from "@/components/Reviews/Reviews";
import Services from "@/components/Services/Services";
import ContactForm from '@/components/ContactForm/ContactForm';


export default function Home() {
    return (
        <>
            <main>
                <Header />
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <FAQ />
                <Reviews />
                <ContactForm />
            </main>
        </>
    );
}
