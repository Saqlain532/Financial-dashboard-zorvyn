import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-3 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: payload[0].payload.color }} />
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{payload[0].name}</p>
                </div>
                <p className="text-lg font-bold text-zinc-900 dark:text-zinc-50 pl-4.5">
                    ${payload[0].value.toLocaleString()}
                </p>
            </div>
        );
    }
    return null;
};

const CustomLegend = ({ payload }) => {
    return (
        <ul className="flex flex-col gap-3 mt-6">
            {payload.map((entry, index) => (
                <li key={`item-${index}`} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2.5">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                        <span className="text-zinc-600 dark:text-zinc-400 font-medium">{entry.value}</span>
                    </div>
                    <span className="font-semibold text-zinc-900 dark:text-zinc-50">
                        ${entry.payload.value.toLocaleString()}
                    </span>
                </li>
            ))}
        </ul>
    );
};

const CategorialVisualization = ({ data }) => {
    return (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm h-full flex flex-col hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300">
            <div className="mb-2">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Spending Breakdown</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Where your money goes</p>
            </div>
            <div className="flex-1 w-full min-h-[300px] flex flex-col justify-center">
                <ResponsiveContainer width="100%" height={220}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={95}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                </ResponsiveContainer>
                {/* We render the custom legend directly outside SVG to allow easy flex layout styling */}
                <CustomLegend payload={data.map(item => ({ value: item.name, color: item.color, payload: item }))} />
            </div>
        </div>
    );
};

export default CategorialVisualization;
