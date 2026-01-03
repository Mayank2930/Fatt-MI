export default function Partners() {
    const partners = [
        'NYSE', 'NASDAQ', 'Bloomberg', 'Reuters', 'Coinbase', 'Binance', 'CME Group', 'ICE'
    ];

    return (
        <section className="py-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-slate-500 text-sm mb-8">TRUSTED DATA PARTNERS</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="text-slate-500 font-bold text-xl md:text-2xl tracking-wider hover:text-slate-300 transition-colors"
                        >
                            {partner}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
