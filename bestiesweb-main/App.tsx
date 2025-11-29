import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SubHero from './components/SubHero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Vote from './components/Vote';

type Page = 'home' | 'vote';

const App: React.FC = () => {
    const [page, setPage] = useState<Page>('home');

    const navigateTo = (targetPage: Page) => {
        setPage(targetPage);
        window.scrollTo(0, 0);
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-cover bg-bottom" style={{backgroundImage: "url('data:image/svg+xml,%3csvg xmlns=\'http://www.w.org/2000/svg\' viewBox=\'0 0 1600 800\'%3e%3cg fill-opacity=\'0.2\'%3e%3cpath fill=\'%23a09eff\' d=\'M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z\'/%3e%3cpath fill=\'%23ff89c9\' d=\'M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2.1C559.7 724.4 612.4 736.7 671 750.4c112.2 26.5 231 60.8 357.7 86.5C1135.2 864.2 1252.9 881 1385 887.2c24.3 1.1 48.6 2 73 2.7c86.2 2.4 171.7-10.3 255.3-27.6c-2.5-0.5-5-1.1-7.5-1.6C1636 845 1600 825.4 1600 800V0z\'/%3e%3c/g%3e%3c/svg%3e')"}}>
            <div className="relative z-10">
                <Header />
                <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {page === 'home' && (
                        <>
                            <Hero onNavigate={() => navigateTo('vote')} />
                            <SubHero />
                            <Features />
                            <Pricing />
                            <HowItWorks />
                            <Testimonials />
                            <Faq />
                        </>
                    )}
                    {page === 'vote' && <Vote onBack={() => navigateTo('home')} />}
                </main>
                {page === 'home' && <Footer onNavigate={() => navigateTo('vote')} />}
            </div>
        </div>
    );
};

export default App;
