import { tickerItems } from '../data/mockData';

export default function Ticker() {
    const renderItems = () => {
        return tickerItems.map((item, index) => (
            <div key={index} className="inline-flex items-center px-6 font-data space-x-2">
                <span className="font-bold text-slate-300">{item.symbol}</span>
                <span className="text-white">{item.price}</span>
                <span className={`${item.up ? 'text-signal-up' : 'text-signal-down'} text-sm flex items-center`}>
                    {item.up ? '▲' : '▼'} {item.change}
                </span>
            </div>
        ));
    };

    return (
        <div className="w-full overflow-hidden bg-brand-dark/50 border-y border-white/5 backdrop-blur-sm mb-12 py-3">
            <div className="flex animate-marquee whitespace-nowrap">
                {renderItems()}
                {renderItems()}
                {renderItems()}
            </div>
        </div>
    );
}
