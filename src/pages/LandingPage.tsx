import HeroSection from "../components/HeroSection.tsx";
import Footer from "../components/Footer.tsx"
import Menu from "../components/Menu.tsx";
import OurValues from "../components/OurValues.tsx";
import Faq from "../components/Faq.tsx";
import Reserve from "../components/Resesrve.tsx";

const LandingPage = () => {
    return (
        <main className='overflow-hidden'>
            <HeroSection/>
            <Menu/>
            <OurValues/>
            <Faq/>
            <Reserve/>
            {/* Social Proof */}
            {/* Ingredients */}
            {/* Benefits */}
            {/* How It Works */}
            {/* Product Showcase */}
            {/* Testimonials */}
            {/* Why Us */}
            {/* Our Story */}
            {/* FAQ */}
            {/* Newsletter */}
            <Footer/>
        </main>
    )
}

export default LandingPage;