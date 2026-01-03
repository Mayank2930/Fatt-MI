const testimonials = [
    {
        quote: "FATT Inc. completely transformed how I analyze markets. The real-time data and AI insights have given me an edge I never had before.",
        author: "Michael Torres",
        role: "Day Trader",
        avatar: "MT"
    },
    {
        quote: "As a portfolio manager, I need reliable data. FATT's institutional-grade feeds and 99.99% uptime have been game-changing for our fund.",
        author: "Jennifer Liu",
        role: "Portfolio Manager at BlackRock",
        avatar: "JL"
    },
    {
        quote: "The Pro mode analytics helped me identify patterns I was missing. My returns improved 40% in the first quarter of using FATT.",
        author: "Robert Anderson",
        role: "Retail Investor",
        avatar: "RA"
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Trusted by Investors Worldwide</h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Join over 1 million investors who rely on FATT Inc. for their market intelligence.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <blockquote className="text-slate-300 mb-6 leading-relaxed">
                                "{testimonial.quote}"
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="font-semibold text-white">{testimonial.author}</p>
                                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
