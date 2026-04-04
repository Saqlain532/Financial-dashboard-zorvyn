import React from 'react';
import InsightCard from '../components/InsightCard';
import TimeChart from '../components/TimeChart';
import CategorialVisualization from '../components/CategorialVisualization';
import { 
    textualInsights, 
    insightsTimeData, 
    insightsCategoryData 
} from '../assets/dummyData/insightsData';

const Insights = () => {
    return (
        <main className="px-4 md:px-12 lg:px-24 mx-auto w-full max-w-[1400px] mt-8 md:mt-10">
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight border border-zinc-200 dark:border-zinc-800 rounded-full px-6 py-2 text-center w-fit">Financial Insights</h1>
                <p className="text-zinc-500 dark:text-zinc-400 mt-2 md:text-lg">AI-driven observations based on your recent spending habits.</p>
            </div>

            {/* Smart Analytics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-8">
                {textualInsights.map(insight => (
                    <InsightCard key={insight.id} insight={insight} />
                ))}
            </div>

            {/* Reused Modular Charts containing isolated insights state */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
                <div className="lg:col-span-2">
                    <TimeChart data={insightsTimeData} />
                </div>
                <div className="lg:col-span-1">
                    <CategorialVisualization data={insightsCategoryData} />
                </div>
            </div>
        </main>
    );
};

export default Insights;
