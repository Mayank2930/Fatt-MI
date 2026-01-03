import { useState } from 'react';

const plans = [
    {
        name: 'Starter',
        price: 'Free',
        period: '',
        description: 'Perfect for getting started with market tracking.',
        features: [
            'Real-time quotes (15min delay)',
            'Basic portfolio tracking',
            '5 watchlist items',
            'Daily market summary',
            'Mobile app access',
        ],
        cta: 'Get Started',
        popular: false,
    },
    {
        name: 'Pro',
        price: '$29',
        period: '/month',
        description: 'For serious investors who need real-time data.',
        features: [
            'Live real-time quotes',
            'Unlimited portfolio tracking',
            'Unlimited watchlists',
            'AI-powered insights',
            'Advanced charts & technical analysis',
            'Price alerts',
            'API access (10K calls/month)',
            'Priority support',
        ],
        cta: 'Start Free Trial',
        popular: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For institutions and high-volume traders.',
        features: [
            'Everything in Pro',
            'Dedicated account manager',
            'Custom data feeds',
            'Unlimited API access',
            'White-label solutions',
            'On-premise deployment',
            'SLA guarantee (99.99%)',
            '24/7 phone support',
        ],
        cta: 'Contact Sales',
        popular: false,
    },
];

const faqs = [
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.',
    },
    {
        question: 'Can I cancel my subscription anytime?',
        answer: 'Yes, you can cancel anytime. Your access will continue until the end of your billing period.',
    },
    {
        question: 'Is there a free trial for Pro?',
        answer: 'Yes! Pro comes with a 14-day free trial. No credit card required to start.',
    },
    {
        question: 'What data sources do you use?',
        answer: 'We aggregate data from 50+ exchanges worldwide, including NYSE, NASDAQ, LSE, and major crypto exchanges.',
    },
];

export default function PricingPage() {
    const [isAnnual, setIsAnnual] = useState(false);

    return (
        <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    Choose the plan that fits your investment style. All plans include our core security features.
                </p>

                {/* Toggle */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
                    <button
                        onClick={() => setIsAnnual(!isAnnual)}
                        className={`w-14 h-7 rounded-full transition-colors relative ${isAnnual ? 'bg-brand-accent' : 'bg-slate-700'}`}
                    >
                        <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform ${isAnnual ? 'translate-x-8' : 'translate-x-1'}`}></div>
                    </button>
                    <span className={`text-sm ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
                        Annual <span className="text-signal-up">(Save 20%)</span>
                    </span>
                </div>
            </div>

            {/* Plans */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`glass rounded-2xl p-8 relative ${plan.popular ? 'ring-2 ring-brand-accent' : ''}`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-accent text-white text-sm font-bold rounded-full shadow-lg shadow-blue-500/50">
                                Most Popular
                            </div>
                        )}
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-white">
                                {plan.price === 'Free' || plan.price === 'Custom'
                                    ? plan.price
                                    : isAnnual
                                        ? `$${Math.round(parseInt(plan.price.slice(1)) * 0.8)}`
                                        : plan.price
                                }
                            </span>
                            {plan.period && <span className="text-slate-400">{plan.period}</span>}
                        </div>
                        <ul className="space-y-3 mb-8">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                    <svg className="w-5 h-5 text-signal-up flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button
                            className={`w-full py-3 rounded-lg font-bold transition-colors ${plan.popular
                                    ? 'bg-brand-accent text-white hover:bg-blue-600'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                        >
                            {plan.cta}
                        </button>
                    </div>
                ))}
            </div>

            {/* FAQs */}
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="glass rounded-xl p-6">
                            <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                            <p className="text-slate-400 text-sm">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
