export default function SecuritySection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-accent/5 skew-y-3 transform origin-bottom-left -z-10"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Fortified Security</h2>
                    <p className="text-slate-400 max-w-xl mx-auto">Bank-grade encryption meets decentralized verification.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="glass p-8 rounded-2xl text-center hover:bg-white/5 transition-colors">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">256-bit Encryption</h3>
                        <p className="text-sm text-slate-400">Data is encrypted at rest and in transit using military-grade protocols.</p>
                    </div>

                    <div className="glass p-8 rounded-2xl text-center hover:bg-white/5 transition-colors relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-accent text-white text-xs font-bold rounded-full shadow-lg shadow-blue-500/50">
                            CORE FEATURE
                        </div>
                        <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 text-purple-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Real-time Audits</h3>
                        <p className="text-sm text-slate-400">Continuous security auditing and compliance monitoring 24/7.</p>
                    </div>

                    <div className="glass p-8 rounded-2xl text-center hover:bg-white/5 transition-colors">
                        <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 text-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Privacy First</h3>
                        <p className="text-sm text-slate-400">We don't sell your data. Your portfolio strategy remains yours.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
