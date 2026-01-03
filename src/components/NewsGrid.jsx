import { newsItems } from '../data/mockData';

export default function NewsGrid({ isProMode }) {
    const getSentimentBorder = (sentiment) => {
        if (sentiment === 'Bullish' || sentiment === 'Positive') return 'border-l-signal-up';
        if (sentiment === 'Bearish') return 'border-l-signal-down';
        return 'border-l-brand-accent';
    };

    const getSentimentColor = (sentiment) => {
        if (sentiment === 'Bullish' || sentiment === 'Positive') return 'bg-signal-up';
        return 'bg-brand-accent';
    };

    if (isProMode) {
        return (
            <div className="flex flex-col space-y-2">
                {newsItems.map((item, index) => (
                    <article
                        key={index}
                        className={`glass p-4 flex items-center justify-between border-l-4 ${getSentimentBorder(item.sentiment)}`}
                    >
                        <div className="flex items-center space-x-6 w-full">
                            <span className="text-xs font-mono text-slate-400 w-16">{item.time}</span>
                            <div className="flex-1">
                                <h3 className="font-semibold text-sm text-slate-100">{item.title}</h3>
                            </div>
                            <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300">{item.category}</span>
                            <span className={`text-xs font-bold ${item.impact.includes('High') ? 'text-signal-up' : 'text-brand-accent'}`}>
                                {item.impact}
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
                <article
                    key={index}
                    className="glass-card p-6 flex flex-col space-y-4 relative overflow-hidden group"
                >
                    <div className="flex justify-between items-start z-10">
                        <span className="px-2 py-1 text-xs font-medium bg-brand-accent/20 text-blue-300 rounded-md border border-brand-accent/30">
                            {item.category}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">{item.time}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-100 leading-tight group-hover:text-brand-accent transition-colors z-10">
                        {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-2 z-10">{item.summary}</p>
                    <div className="pt-4 mt-auto flex items-center space-x-2 z-10">
                        <div className="h-1.5 flex-1 bg-slate-800 rounded-full overflow-hidden">
                            <div className={`h-full ${getSentimentColor(item.sentiment)} w-3/4`}></div>
                        </div>
                        <span className="text-xs text-slate-500 font-mono">Interest</span>
                    </div>
                    {/* Decorative blurred glow */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-accent/10 blur-3xl rounded-full group-hover:bg-brand-accent/20 transition-all duration-500"></div>
                </article>
            ))}
        </div>
    );
}
