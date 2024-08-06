import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import AppHeader from "components/HeaderPage";
import AppHero from "components/HeroPage";
import AppAbout from "components/AboutPage";
import AppServices from "components/ServicesPage";
import AppWorks from "components/WorksPage";
import AppTeams from "components/TeamsPage";
import AppTestimonials from "components/TestimonialsPage";
import AppPricing from "components/PricingPage";
import AppBlog from "components/BlogPage";
import AppContact from "components/ContactPage";
import AppFooter from "components/FooterPage";

function App() {
    return (
        <div className="App">
            <header id="header">
                <AppHeader />
            </header>
            <main>
                <AppHero />
                <AppAbout />
                <AppServices />
                <AppWorks />
                <AppTeams />
                <AppTestimonials />
                <AppPricing />
                <AppBlog />
                <AppContact />
            </main>
            <footer id="footer">
                <AppFooter />
            </footer>
        </div>
    );
}

export default App;
