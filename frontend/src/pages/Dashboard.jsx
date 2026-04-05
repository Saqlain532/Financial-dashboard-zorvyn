import React from 'react';
import { Link } from 'react-router-dom';
import SummaryCard from '../components/SummaryCard';
import TimeChart from '../components/TimeChart';
import CategorialVisualization from '../components/CategorialVisualization';
import { Wallet, ArrowUpRight, ArrowDownRight, PiggyBank } from 'lucide-react';
import { summaryStats, balanceTrend, spendingBreakdown } from '../assets/dummyData/OverviewData';
import { dummyTransactions } from '../assets/dummyData/transactionData';
import TransactionCard from '../components/TransactionCard';

const Dashboard = () => {
  return (
    <main className="px-4 md:px-12 lg:px-24 mx-auto w-full max-w-[1400px] mt-8 md:mt-10">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight border border-zinc-200 dark:border-zinc-800 rounded-full px-6 py-2 text-center w-fit">Dashboard Overview</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1.5 md:text-lg">Welcome back! Here's what's happening with your finances today.</p>
      </div>

      {/* Summary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-6">
        <SummaryCard
          title="Total Balance"
          amount={summaryStats.totalBalance}
          trend={4.2}
          trendUp={true}
          icon={Wallet}
        />
        <SummaryCard
          title="Total Income"
          amount={summaryStats.totalIncome}
          trend={8.1}
          trendUp={true}
          icon={ArrowUpRight}
        />
        <SummaryCard
          title="Total Expenses"
          amount={summaryStats.totalExpenses}
          trend={2.4}
          trendUp={false}
          icon={ArrowDownRight}
        />
        <SummaryCard
          title="Total Savings"
          amount={summaryStats.totalSavings || 0}
          trend={5.6}
          trendUp={true}
          icon={PiggyBank}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 mb-8">
        <div className="lg:col-span-2">
          <TimeChart data={balanceTrend} />
        </div>
        <div className="lg:col-span-1">
          <CategorialVisualization data={spendingBreakdown} />
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">Recent Transactions</h2>
          <Link 
            to="/transactions" 
            className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            View All
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          {dummyTransactions.slice(-5).reverse().map((transaction) => (
            <TransactionCard 
              key={transaction.id} 
              transaction={transaction} 
              onUpdate={() => {}} 
              onDelete={() => {}} 
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
