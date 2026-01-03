import { tickerItems } from '../data/mockData';

const marketData = [
    { symbol: 'BTC/USD', name: 'Bitcoin', price: '42,560.20', change: '+1.2%', up: true, volume: '24.5B', marketCap: '834.2B' },
    { symbol: 'ETH/USD', name: 'Ethereum', price: '2,240.15', change: '-0.5%', up: false, volume: '12.3B', marketCap: '269.1B' },
    { symbol: 'SPX', name: 'S&P 500', price: '4,780.45', change: '+0.3%', up: true, volume: '3.2B', marketCap: '41.2T' },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: '245.30', change: '+2.1%', up: true, volume: '98.2M', marketCap: '780.5B' },
    { symbol: 'AAPL', name: 'Apple Inc.', price: '192.50', change: '-0.1%', up: false, volume: '52.1M', marketCap: '3.0T' },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: '488.20', change: '+3.4%', up: true, volume: '45.8M', marketCap: '1.2T' },
    { symbol: 'AMZN', name: 'Amazon.com', price: '178.25', change: '+0.8%', up: true, volume: '38.4M', marketCap: '1.85T' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: '141.80', change: '+0.6%', up: true, volume: '22.1M', marketCap: '1.78T' },
    { symbol: 'META', name: 'Meta Platforms', price: '353.96', change: '+1.9%', up: true, volume: '18.7M', marketCap: '910.2B' },
    { symbol: 'XAU/USD', name: 'Gold', price: '2,045.00', change: '+0.5%', up: true, volume: '189.2B', marketCap: 'N/A' },
];

export default function MarketsPage() {
    return (
        <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Live Markets</h1>
                <p className="text-slate-400 max-w-2xl">
                    Real-time market data powered by FATT Inc.'s institutional-grade data feeds. Updated every second.
                </p>
            </div>

            {/* Market Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="glass p-6 rounded-xl">
                    <p className="text-slate-400 text-sm mb-1">Total Market Cap</p>
                    <p className="text-2xl font-bold text-white">$48.2T</p>
                    <p className="text-signal-up text-sm">+2.4% today</p>
                </div>
                <div className="glass p-6 rounded-xl">
                    <p className="text-slate-400 text-sm mb-1">24h Volume</p>
                    <p className="text-2xl font-bold text-white">$312.5B</p>
                    <p className="text-signal-up text-sm">+5.1% vs avg</p>
                </div>
                <div className="glass p-6 rounded-xl">
                    <p className="text-slate-400 text-sm mb-1">Fear & Greed</p>
                    <p className="text-2xl font-bold text-signal-up">72</p>
                    <p className="text-slate-400 text-sm">Greed</p>
                </div>
                <div className="glass p-6 rounded-xl">
                    <p className="text-slate-400 text-sm mb-1">Active Trades</p>
                    <p className="text-2xl font-bold text-white">1.2M</p>
                    <p className="text-brand-accent text-sm">Live</p>
                </div>
            </div>

            {/* Market Table */}
            <div className="glass rounded-xl overflow-hidden">
                <table className="w-full">
                    <thead className="bg-white/5">
                        <tr className="text-left text-slate-400 text-sm">
                            <th className="px-6 py-4 font-medium">Asset</th>
                            <th className="px-6 py-4 font-medium">Price</th>
                            <th className="px-6 py-4 font-medium">24h Change</th>
                            <th className="px-6 py-4 font-medium hidden md:table-cell">Volume</th>
                            <th className="px-6 py-4 font-medium hidden lg:table-cell">Market Cap</th>
                            <th className="px-6 py-4 font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marketData.map((item, index) => (
                            <tr key={index} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4">
                                    <div>
                                        <p className="font-semibold text-white">{item.symbol}</p>
                                        <p className="text-sm text-slate-400">{item.name}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-data text-white">${item.price}</td>
                                <td className={`px-6 py-4 font-data ${item.up ? 'text-signal-up' : 'text-signal-down'}`}>
                                    {item.up ? '▲' : '▼'} {item.change}
                                </td>
                                <td className="px-6 py-4 text-slate-400 hidden md:table-cell">${item.volume}</td>
                                <td className="px-6 py-4 text-slate-400 hidden lg:table-cell">${item.marketCap}</td>
                                <td className="px-6 py-4">
                                    <button className="px-3 py-1 text-sm bg-brand-accent/20 text-brand-accent rounded hover:bg-brand-accent/30 transition-colors">
                                        Trade
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
