import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import NewsGrid from '../components/NewsGrid';
import SecuritySection from '../components/SecuritySection';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';

export default function HomePage({ isProMode }) {
    return (
        <>
            <main className={`${isProMode ? 'max-w-7xl' : 'max-w-5xl'} mx-auto px-6 pt-32 pb-20 transition-all duration-500`}>
                <Hero />
                <Ticker />
                <NewsGrid isProMode={isProMode} />
            </main>
            <SecuritySection />
            <Testimonials />
            <Partners />
        </>
    );
}
