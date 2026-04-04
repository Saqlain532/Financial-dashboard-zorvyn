import React, { useState, useMemo } from 'react';
import TransactionCard from '../components/TransactionCard';
import TransactionFiltering from '../components/TransactionFiltering';
import { dummyTransactions } from '../assets/dummyData/transactionData';

const Transactions = () => {
    const [transactionsData, setTransactionsData] = useState(dummyTransactions);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('All');
    const [sortBy, setSortBy] = useState('date-desc');

    // Run core filtering and sorting logic organically on rendering evaluation tracking dependencies properly
    const displayedTransactions = useMemo(() => {
        let filtered = [...transactionsData];

        // 1. Target Search Constraints
        if (searchTerm) {
            const lowerQuery = searchTerm.toLowerCase();
            filtered = filtered.filter(t => 
                t.merchant.toLowerCase().includes(lowerQuery) || 
                t.category.toLowerCase().includes(lowerQuery)
            );
        }

        // 2. Class Type Filter
        if (filterType !== 'All') {
            filtered = filtered.filter(t => t.type === filterType);
        }

        // 3. Sorting Execution
        filtered.sort((a, b) => {
            if (sortBy === 'date-desc') {
                return new Date(b.date) - new Date(a.date);
            } else if (sortBy === 'date-asc') {
                return new Date(a.date) - new Date(b.date);
            } else if (sortBy === 'amount-desc') {
                return b.amount - a.amount;
            } else if (sortBy === 'amount-asc') {
                return a.amount - b.amount;
            }
            return 0;
        });

        return filtered;
    }, [searchTerm, filterType, sortBy, transactionsData]);

    // Admin Handlers
    const handleDelete = (id) => {
        setTransactionsData(prev => prev.filter(t => t.id !== id));
    };

    const handleUpdate = (updatedTx) => {
        setTransactionsData(prev => prev.map(t => t.id === updatedTx.id ? updatedTx : t));
    };

    // CSV Mapping Generation & System Download Export Logik
    const handleExport = () => {
        const headers = ['ID', 'Date', 'Amount ($)', 'Category', 'Type', 'Merchant'];
        const csvRows = displayedTransactions.map(t => 
            `"${t.id}","${t.date}",${t.amount},"${t.category}","${t.type}","${t.merchant}"`
        );
        const csvContent = [headers.join(','), ...csvRows].join('\n');
        
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', 'filtered_transactions_export.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <main className="px-4 md:px-12 lg:px-24 mx-auto w-full max-w-[1400px] mt-8 md:mt-10">
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight border border-zinc-200 dark:border-zinc-800 rounded-full px-6 py-2 text-center w-fit">Transactions</h1>
                <p className="text-zinc-500 dark:text-zinc-400 mt-2 md:text-lg">View, filter, sort, and export your complete monetary interactions.</p>
            </div>

            <TransactionFiltering 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filterType={filterType}
                setFilterType={setFilterType}
                sortBy={sortBy}
                setSortBy={setSortBy}
                onExport={handleExport}
            />

            <div className="flex flex-col gap-3">
                {displayedTransactions.length > 0 ? (
                    displayedTransactions.map((transaction) => (
                        <TransactionCard 
                            key={transaction.id} 
                            transaction={transaction}
                            onDelete={handleDelete}
                            onUpdate={handleUpdate}
                        />
                    ))
                ) : (
                    <div className="py-16 text-center border border-dashed border-zinc-300 dark:border-zinc-800 rounded-2xl">
                        <p className="text-zinc-500 dark:text-zinc-400 font-medium">No transactions match your filters.</p>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Transactions;
