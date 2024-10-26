import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Group from "../Components/Group";
import AboutUs from "../Components/AboutUs";
import Testimonials from "../Components/Testimonials";
import Admin from "../Components/Admin";

function LandingPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div id="home" className="pt-16">
                <Hero />
            </div>
            <Group />
            <AboutUs />
            <Testimonials />
            <Admin />
        </div>
    );
}

export default LandingPage;
