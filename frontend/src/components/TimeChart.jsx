import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl shadow-lg">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">{label} 2026</p>
                <p className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                    ${payload[0].value.toLocaleString()}
                </p>
            </div>
        );
    }
    return null;
};

const TimeChart = ({ data }) => {
    return (
        <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm h-full flex flex-col transition-colors">
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Balance Trend</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Your total balance over the last 7 months</p>
            </div>
            <div className="flex-1 min-h-[300px] w-full mt-2">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                        <defs>
                            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#71717A" strokeOpacity={0.15} />
                        <XAxis 
                            dataKey="month" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#71717A', fontSize: 13, fontWeight: 500 }}
                            tickMargin={12}
                        />
                        <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#71717A', fontSize: 13, fontWeight: 500 }}
                            tickFormatter={(value) => `$${value/1000}k`}
                            tickMargin={12}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#71717A', strokeWidth: 1, strokeDasharray: '4 4' }} />
                        <Area
                            type="monotone"
                            dataKey="balance"
                            stroke="#3B82F6"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorBalance)"
                            activeDot={{ r: 6, fill: '#3B82F6', stroke: '#fff', strokeWidth: 2 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default TimeChart;
