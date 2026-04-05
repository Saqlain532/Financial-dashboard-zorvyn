import React from 'react';
import { AlertCircle, CheckCircle2, Info, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const InsightCard = ({ insight }) => {
    // Dynamic mappings for aesthetic visual indicators
    const getIcon = (type) => {
        switch(type) {
            case 'alert': return <AlertCircle className="w-5 h-5 text-amber-500" />;
            case 'success': return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
            case 'info':
            default: return <Info className="w-5 h-5 text-blue-500" />;
        }
    };

    const getTrendIcon = (trend) => {
        switch(trend) {
            case 'up': return <TrendingUp className="w-4 h-4 text-amber-500" />;
            case 'down': return <TrendingDown className="w-4 h-4 text-emerald-500" />;
            case 'neutral':
            default: return <Minus className="w-4 h-4 text-zinc-400" />;
        }
    };

    return (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
            <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700">
                    {getIcon(insight.iconType)}
                </div>
                <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">{insight.title}</h3>
            </div>
            
            <div className="mb-4">
                <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">{insight.value}</span>
            </div>
            
            <div className="flex items-start gap-2.5 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
                <div className="flex items-center justify-center p-1 rounded-full bg-zinc-50 dark:bg-zinc-800 mt-0.5">
                    {getTrendIcon(insight.trend)}
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{insight.subtext}</p>
            </div>
        </div>
    );
};

export default InsightCard;
