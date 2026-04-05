import React from 'react'
import zorvynLogo from '../assets/zorvyn.png'
import { useAppContext } from '../AppContext'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const { isDarkMode, toggleDarkMode, userRole, setUserRole } = useAppContext();
    const [menuOpen, setMenuOpen] = React.useState(false);
    const navItems = [
        { name: 'Overview', path: '/' },
        { name: 'Transactions', path: '/transactions' },
        { name: 'Insights', path: '/insights' }
    ];

    return (
        <>
            <nav className="bg-white dark:bg-zinc-900 px-6 py-3 flex items-center justify-between relative border border-zinc-200 dark:border-zinc-800 rounded-full shadow-xs mx-4 mt-4 md:mx-12 lg:mx-24 md:py-4 transition-colors">

                <div className="flex items-center cursor-pointer">
                    <img src={zorvynLogo} alt="Zorvyn Logo" className="h-20 w-50" />
                </div>

                <div className="hidden md:flex items-center bg-zinc-50 border border-zinc-200 rounded-full px-1 py-1 gap-1 dark:bg-zinc-800/50 dark:border-zinc-800">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            end={item.path === '/'}
                            className={({ isActive }) => `px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer border ${isActive
                                ? 'bg-white border-zinc-200 text-zinc-900 shadow-sm dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-50'
                                : 'border-transparent text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100/50 dark:text-zinc-400 dark:hover:text-zinc-300 dark:hover:bg-zinc-800/50'
                                }`}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                <div className="relative hidden md:flex items-center gap-3">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDarkMode ? (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                        )}
                    </button>
                    <div className="relative flex">
                        <select 
                            value={userRole}
                            onChange={(e) => setUserRole(e.target.value)}
                            className="appearance-none bg-zinc-950 hover:bg-zinc-900 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 text-sm font-medium pl-5 pr-10 py-2.5 rounded-full cursor-pointer outline-none transition-all shadow-sm border-0"
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" className="text-white dark:text-zinc-900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                    </div>
                </div>

                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-1">
                    <span className={`block w-6 h-0.5 bg-zinc-800 dark:bg-zinc-200 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-zinc-800 dark:bg-zinc-200 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-zinc-800 dark:bg-zinc-200 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl mt-2 flex flex-col p-5 gap-2 md:hidden z-50 shadow-lg">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                end={item.path === '/'}
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) => `px-4 py-2.5 rounded-lg text-sm text-left transition-colors cursor-pointer ${isActive
                                    ? 'bg-zinc-50 dark:bg-zinc-800 font-medium text-zinc-900 dark:text-zinc-50 border border-zinc-200 dark:border-zinc-700'
                                    : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 border border-transparent'
                                    }`}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                        <div className="flex items-center justify-between mt-2 px-2">
                            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Theme</span>
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 rounded-full text-zinc-500 bg-zinc-100 dark:bg-zinc-800 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors cursor-pointer"
                                aria-label="Toggle Dark Mode"
                            >
                                {isDarkMode ? (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                                )}
                            </button>
                        </div>
                        <div className="relative mt-2 w-full">
                            <select 
                                value={userRole}
                                onChange={(e) => setUserRole(e.target.value)}
                                className="appearance-none w-full bg-zinc-950 hover:bg-zinc-900 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 text-sm font-medium pl-5 pr-10 py-3 rounded-xl cursor-pointer outline-none transition-all shadow-sm border-0"
                            >
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" className="text-white dark:text-zinc-900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar
