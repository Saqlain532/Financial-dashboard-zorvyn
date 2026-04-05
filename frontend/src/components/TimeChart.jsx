import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-4 rounded-xl shadow-lg">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">{label} 2026</p>
                <div className="flex flex-col gap-1.5">
                    {payload.map((entry, index) => (
                        <div key={index} className="flex items-center justify-between gap-6">
                            <span className="text-sm font-medium capitalize" style={{ color: entry.stroke }}>{entry.name}:</span>
                            <span className="text-sm font-bold text-zinc-900 dark:text-zinc-50">
                                ${entry.value.toLocaleString()}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return null;
};

const TimeChart = ({ data }) => {
    return (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm h-full flex flex-col hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300">
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Financial Trend</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Your balance, income, and expenses over the last 7 months</p>
            </div>
            <div className="flex-1 min-h-[300px] w-full mt-2">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                        <defs>
                            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
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
                            name="Balance"
                            stroke="#3B82F6"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorBalance)"
                            activeDot={{ r: 6, fill: '#3B82F6', stroke: '#fff', strokeWidth: 2 }}
                        />
                        <Area
                            type="monotone"
                            dataKey="income"
                            name="Income"
                            stroke="#10B981"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorIncome)"
                            activeDot={{ r: 4, fill: '#10B981', stroke: '#fff', strokeWidth: 2 }}
                        />
                        <Area
                            type="monotone"
                            dataKey="expense"
                            name="Expense"
                            stroke="#EF4444"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorExpense)"
                            activeDot={{ r: 4, fill: '#EF4444', stroke: '#fff', strokeWidth: 2 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default TimeChart;
