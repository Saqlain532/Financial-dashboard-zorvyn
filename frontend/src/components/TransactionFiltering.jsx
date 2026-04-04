import React from 'react';
import { Search, Download, Filter } from 'lucide-react';

const TransactionFiltering = ({ searchTerm, setSearchTerm, filterType, setFilterType, sortBy, setSortBy, onExport }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-6 bg-white dark:bg-zinc-950 p-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
            {/* Search Input */}
            <div className="relative w-full lg:w-1/3">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-zinc-400" />
                </div>
                <input 
                    type="text" 
                    placeholder="Search by merchant or category..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-11 pr-4 py-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-zinc-50/10 transition-shadow placeholder-zinc-400"
                />
            </div>

            {/* Filters & Export Options */}
            <div className="flex flex-wrap md:flex-nowrap items-center gap-3 w-full lg:w-auto">
                <div className="relative flex-1 md:flex-none min-w-[130px]">
                    <select 
                        value={filterType} 
                        onChange={(e) => setFilterType(e.target.value)}
                        className="w-full appearance-none bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm py-2.5 pl-4 pr-10 rounded-xl outline-none cursor-pointer focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-zinc-50/10"
                    >
                        <option value="All">All Types</option>
                        <option value="income">Income Only</option>
                        <option value="expense">Expenses Only</option>
                    </select>
                    <Filter className="absolute right-3 top-3 h-4 w-4 text-zinc-400 pointer-events-none" />
                </div>

                <div className="relative flex-1 md:flex-none min-w-[160px]">
                    <select 
                        value={sortBy} 
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full appearance-none bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm py-2.5 pl-4 pr-10 rounded-xl outline-none cursor-pointer focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-zinc-50/10"
                    >
                        <option value="date-desc">Newest First</option>
                        <option value="date-asc">Oldest First</option>
                        <option value="amount-desc">Highest Amount</option>
                        <option value="amount-asc">Lowest Amount</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" className="text-zinc-400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </div>

                <button 
                    onClick={onExport}
                    className="flex items-center justify-center gap-2 w-full md:w-auto bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 dark:text-zinc-900 text-white text-sm font-medium py-2.5 px-5 rounded-xl transition-colors cursor-pointer"
                >
                    <Download className="w-4 h-4" />
                    <span>Export CSV</span>
                </button>
            </div>
        </div>
    );
};

export default TransactionFiltering;
