import React from 'react';

const SummaryCard = ({ title, amount, trend, trendUp, icon: Icon }) => {
    return (
        <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm transition-colors">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{title}</h3>
                <div className="p-2 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
                    <Icon className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                </div>
            </div>
            <div className="mt-4 flex items-baseline gap-3">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                    ${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </h2>
            </div>
            <div className="mt-2 flex items-center gap-1.5">
                <span className={`text-sm font-medium ${trendUp ? 'text-emerald-500' : 'text-red-500'}`}>
                    {trendUp ? '+' : ''}{trend}%
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">vs last month</span>
            </div>
        </div>
    );
};

export default SummaryCard;
