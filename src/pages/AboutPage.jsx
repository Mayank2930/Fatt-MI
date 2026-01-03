export default function AboutPage() {
    const team = [
        { name: 'Alex Chen', role: 'CEO & Founder', bio: 'Former Goldman Sachs. 15+ years in fintech.' },
        { name: 'Sarah Miller', role: 'CTO', bio: 'Ex-Google. Built systems processing 1M+ TPS.' },
        { name: 'David Park', role: 'Head of Security', bio: 'Former NSA. Cybersecurity expert.' },
        { name: 'Emily Watson', role: 'VP of Product', bio: 'Led product at Stripe. Stanford MBA.' },
    ];

    const stats = [
        { value: '1M+', label: 'Active Users' },
        { value: '$50B+', label: 'Assets Tracked' },
        { value: '99.99%', label: 'Uptime' },
        { value: '150+', label: 'Countries' },
    ];

    return (
        <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
            {/* Hero */}
            <div className="text-center mb-20">
                <h1 className="text-5xl font-bold text-white mb-6">About FATT Inc.</h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                    Financial Analytics & Trading Technology. We're building the future of market intelligence,
                    making institutional-grade tools accessible to every investor.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                {stats.map((stat, index) => (
                    <div key={index} className="glass p-8 rounded-xl text-center">
                        <p className="text-4xl font-bold text-brand-accent mb-2">{stat.value}</p>
                        <p className="text-slate-400">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Mission */}
            <div className="glass rounded-2xl p-12 mb-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            We believe that access to real-time, accurate financial data shouldn't be limited to Wall Street.
                            FATT Inc. was founded to democratize market intelligence.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            Our platform combines cutting-edge AI with institutional data feeds to deliver insights
                            that were previously available only to hedge funds and banks.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 p-6 rounded-xl">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-white mb-2">Real-time Data</h3>
                            <p className="text-sm text-slate-400">Sub-millisecond latency</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-white mb-2">AI Insights</h3>
                            <p className="text-sm text-slate-400">Predictive analytics</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl">
                            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-white mb-2">Bank-grade Security</h3>
                            <p className="text-sm text-slate-400">256-bit encryption</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl">
                            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 text-orange-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-white mb-2">Global Coverage</h3>
                            <p className="text-sm text-slate-400">150+ countries</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-white text-center mb-12">Leadership Team</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <div key={index} className="glass p-6 rounded-xl text-center hover:bg-white/5 transition-colors">
                            <div className="w-20 h-20 bg-gradient-to-br from-brand-accent to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                {member.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <h3 className="font-semibold text-white mb-1">{member.name}</h3>
                            <p className="text-brand-accent text-sm mb-2">{member.role}</p>
                            <p className="text-slate-400 text-sm">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
