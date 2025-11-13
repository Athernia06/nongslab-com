import React from 'react';
import Header from './component/layout/Header';
import Hero from './component/section/Hero';
import Separator from './component/section/Separator.jsx';
import About from "./component/section/About.jsx";
import OurServices from "./component/section/Our_services.jsx";

function App() {
    return (
        <div className="App font-roboto">
            <Header />
            <main>
                <Hero />
                <Separator />
                <About />
                <OurServices />
            </main>
        </div>
    );
}

export default App;
