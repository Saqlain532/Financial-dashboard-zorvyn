import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import zorvynLogo from '../assets/zorvyn.png';

const FooterPage = () => {
    return (
        <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 transition-colors mt-auto">
            <div className="px-4 md:px-12 lg:px-24 mx-auto w-full max-w-[1400px] py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

                    {/* Brand Info */}
                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start">
                            <img src={zorvynLogo} alt="Zorvyn Logo" className="h-16 w-auto object-contain -ml-2" />
                        </div>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            Empowering your financial journey with intuitive, AI-driven analytics. Zorvyn brings clarity to your wealth management.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                        <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">Contact Us</h4>
                        <ul className="flex flex-col gap-3.5 mt-1">
                            <li className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 text-sm">
                                <Phone className="w-4 h-4 text-blue-500" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 text-sm">
                                <Mail className="w-4 h-4 text-emerald-500" />
                                <span>support@zorvyn.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 text-sm">
                                <MapPin className="w-4 h-4 text-purple-500" />
                                <span>123 Finance Avenue, NY 10001</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                        <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">Follow Us</h4>
                        <div className="flex items-center gap-4 mt-2">
                            <a href="#" className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 hover:bg-zinc-200 dark:hover:text-white dark:hover:bg-zinc-800 transition-all shadow-sm" aria-label="Twitter/X">
                                <svg viewBox="0 0 24 24" className="w-5 h-5"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </a>
                            <a href="#" className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-pink-600 hover:bg-pink-50 dark:hover:text-pink-400 dark:hover:bg-zinc-800 transition-all shadow-sm" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                            </a>
                            <a href="#" className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-zinc-800 transition-all shadow-sm" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" className="w-5 h-5"><path fill="currentColor" d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Line */}
                <div className="border-t border-zinc-200 dark:border-zinc-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        &copy; {new Date().getFullYear()} Zorvyn Financial. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
                        <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;
