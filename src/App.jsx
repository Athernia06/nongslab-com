import React from 'react';
import Header from './component/layout/Header';
import Hero from './component/section/Hero';
import Separator from './component/section/Separator.jsx';
import About from "./component/section/About.jsx";
import OurServices from "./component/section/Our_services.jsx";
import AdditionalServices from './component/section/Additional_services.jsx';
import WorkProcess from './component/section/Our_works.jsx';
import Footer from './component/layout/Footer.jsx';

function App() {
    return (
        <div className="App font-roboto">
            <Header />
            <main>
                <Hero />
                <Separator />
                <About />
                <OurServices />
                <AdditionalServices />
                <WorkProcess />
            </main>
            <Footer />
        </div>
    );
}

export default App;
