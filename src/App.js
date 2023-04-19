import React, { useState, useEffect, useRef } from 'react';
import Particle from 'Particle/Particle';

// Components
import MainSection from 'Components/MainSection/MainSection';
import NavigationBar from 'Components/NavigationBar/NavigationBar';
import AboutMe from 'Components/AboutMe/AboutMe';
import ContactMe from 'Components/ContactMe/ContactMe';
import Projects from 'Components/Projects/Projects';
import Footer from 'Components/Footer/Footer';

// Styles
import 'App.scss';

function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    const navbarRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        if (sectionRect.top < 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const updateLink = (id) => {
        document.querySelector('#nav-main').classList.remove('nav-item-active');
        document.querySelector('#nav-about').classList.remove('nav-item-active');
        document.querySelector('#nav-projects').classList.remove('nav-item-active');
        document.querySelector('#nav-contact').classList.remove('nav-item-active');
        document.querySelector(id).classList.add('nav-item-active');
    }

    return (
        <div className="App">
            <Particle />
            <section className="main" ref={sectionRef} style={{ height: "100vh" }}>
                <MainSection />
            </section>

            <NavigationBar
                navbarRef={navbarRef}
                updateLink={updateLink}
                isScrolled={isScrolled}
            />

            <AboutMe />

            <Projects />

            <ContactMe />

            <Footer />
        </div>
    );
}

export default App;
