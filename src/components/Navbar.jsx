import { Link } from 'react-router-dom';

export default function Navbar({ isProMode, setIsProMode }) {
    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-white/5 bg-brand-dark/50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-accent to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                        F
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">FATT Inc.</span>
                </Link>

                <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    <Link to="/markets" className="hover:text-white transition-colors">Markets</Link>
                    <Link to="/about" className="hover:text-white transition-colors">About</Link>
                    <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                </div>

                <div className="flex items-center space-x-6">
                    {/* Investor Mode Switcher */}
                    <div className="flex items-center space-x-3 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                        <span className="text-xs font-semibold text-slate-400">RETAIL</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={isProMode}
                                onChange={(e) => setIsProMode(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-accent"></div>
                        </label>
                        <span className="text-xs font-semibold text-white">PRO</span>
                    </div>

                    <Link to="/pricing" className="hidden md:block px-4 py-2 bg-white text-brand-dark font-bold text-sm rounded hover:bg-slate-200 transition-colors">
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}
