import React from 'react';
import { ShoppingBag, Coffee, Home, Car, Zap, Briefcase, Film, HelpCircle, Edit2, Trash2, Check, X } from 'lucide-react';
import { useAppContext } from '../AppContext';

const TransactionCard = ({ transaction, onUpdate, onDelete }) => {
    const { userRole } = useAppContext();
    const isAdmin = userRole === 'admin';
    const [isEditing, setIsEditing] = React.useState(false);
    const [editData, setEditData] = React.useState({ merchant: transaction.merchant, amount: transaction.amount });

    // Dynamically map categories to Lucide layout icons
    const getIcon = (category) => {
        switch (category.toLowerCase()) {
            case 'food': return Coffee;
            case 'housing': return Home;
            case 'transport': return Car;
            case 'utilities': return Zap;
            case 'salary':
            case 'freelance': return Briefcase;
            case 'entertainment': return Film;
            case 'shopping': return ShoppingBag;
            default: return HelpCircle;
        }
    };

    const Icon = getIcon(transaction.category);
    const isIncome = transaction.type === 'income';

    const handleSave = () => {
        onUpdate({ 
            ...transaction, 
            merchant: editData.merchant, 
            amount: parseFloat(editData.amount) || transaction.amount 
        });
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditData({ merchant: transaction.merchant, amount: transaction.amount });
        setIsEditing(false);
    };

    return (
        <div className="flex items-center justify-between p-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${isIncome ? 'bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'}`}>
                    <Icon className="w-5 h-5" />
                </div>
                <div>
                    {isEditing ? (
                        <input 
                            type="text" 
                            className="font-semibold text-zinc-900 dark:text-zinc-50 bg-zinc-100 dark:bg-zinc-800 border focus:border-blue-500 border-zinc-200 dark:border-zinc-700 outline-none rounded py-0.5 px-2 w-full max-w-[180px] text-sm mb-1"
                            value={editData.merchant} 
                            onChange={e => setEditData({...editData, merchant: e.target.value})}
                        />
                    ) : (
                        <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">{transaction.merchant}</h4>
                    )}
                    <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{transaction.category}</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">{new Date(transaction.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 text-right">
                {isEditing ? (
                    <input 
                        type="number" 
                        className="font-bold text-zinc-900 dark:text-zinc-50 bg-zinc-100 dark:bg-zinc-800 border focus:border-blue-500 border-zinc-200 dark:border-zinc-700 outline-none rounded py-0.5 px-2 w-20 sm:w-24 text-right text-lg"
                        value={editData.amount} 
                        onChange={e => setEditData({...editData, amount: e.target.value})}
                    />
                ) : (
                    <span className={`text-lg font-bold tracking-tight ${isIncome ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-900 dark:text-zinc-50'}`}>
                        {isIncome ? '+' : '-'}${transaction.amount.toFixed(2)}
                    </span>
                )}

                {/* Admin Actions */}
                {isAdmin && !isEditing && (
                    <div className="flex items-center gap-1.5 ml-2 border-l border-zinc-200 dark:border-zinc-800 pl-3 sm:pl-4">
                        <button onClick={() => setIsEditing(true)} className="p-1.5 text-zinc-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/40 rounded-lg transition-colors cursor-pointer" title="Edit">
                            <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => onDelete(transaction.id)} className="p-1.5 text-zinc-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/40 rounded-lg transition-colors cursor-pointer" title="Delete">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                )}
                
                {isAdmin && isEditing && (
                    <div className="flex items-center gap-1.5 ml-2 border-l border-zinc-200 dark:border-zinc-800 pl-3 sm:pl-4">
                        <button onClick={handleSave} className="p-1.5 text-zinc-400 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/40 rounded-lg transition-colors cursor-pointer" title="Save">
                            <Check className="w-5 h-5" />
                        </button>
                        <button onClick={handleCancel} className="p-1.5 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer" title="Cancel">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TransactionCard;
