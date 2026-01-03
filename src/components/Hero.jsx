export default function Hero() {
    return (
        <header className="text-center mb-16 space-y-6">
            <span className="inline-block px-3 py-1 text-xs font-medium text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20 mb-4">
                Live Market Intelligence
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 drop-shadow-sm">
                Markets for the <br /><span className="text-brand-accent text-glow">Fearless</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                FATT Inc. delivers real-time data, institutional-grade security, and AI-powered insights for the modern investor.
            </p>
            <div className="flex justify-center gap-4 pt-4">
                <a href="/pricing" className="px-6 py-3 bg-brand-accent text-white font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25">
                    Start Free Trial
                </a>
                <a href="/about" className="px-6 py-3 bg-white/5 text-white font-medium rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                    Learn More
                </a>
            </div>
        </header>
    );
}
