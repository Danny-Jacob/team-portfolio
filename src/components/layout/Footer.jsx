import { Link } from "react-router-dom";
import { Code2, Twitter, Dribbble, Linkedin, Github } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 inline-flex"
                        >
                            <div className="p-2 bg-primary text-white rounded-lg">
                                <Code2 size={24} />
                            </div>
                            <span>
                                Aura<span className="text-primary">Studio</span>
                            </span>
                        </Link>
                        <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-6 leading-relaxed">
                            We build digital experiences that are beautiful, intuitive, and performant. Elevating brands through world-class design and engineering.
                        </p>
                        <div className="flex items-center gap-4">
                            {[
                                { icon: Twitter, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Github, href: "#" },
                                { icon: Dribbble, href: "#" },
                            ].map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:shadow-sm border border-slate-200 dark:border-slate-700 transition-all"
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-6">Navigation</h4>
                        <ul className="flex flex-col gap-4">
                            {["Home", "About", "Projects", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                        className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-6">Contact</h4>
                        <ul className="flex flex-col gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                            <li>sru50069@gmail.com</li>
                            <li>+91 8074 535 783</li>
                            {/* <li>
                                100 Innovation Drive
                                <br />
                                San Francisco, CA 94105
                            </li> */}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 dark:text-slate-500 text-sm">
                        © {currentYear} Aura Studio. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-500">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
