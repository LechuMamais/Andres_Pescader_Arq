'use client'
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        hidden: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.3, ease: "easeInOut" }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
    };

    const pathname = usePathname();
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const links = [
        { href: '/', label: 'WORK', width: '65px' },
        { href: '/contact', label: 'CONTACT', width: '95px' }
    ];

    // Determina qué link mostrar como activo (prioriza hover sobre pathname)
    const activeLink = hoveredLink !== null
        ? links.find(link => link.href === hoveredLink)
        : links.find(link => link.href === pathname);


    return (
        <header className="grid grid-cols-[1fr_auto_1fr] items-center max-w-[1400px] mx-auto w-full h-32 p-4 2xs:px-8 relative">

            <div className="block lg:hidden"></div>

            <nav className='hidden lg:flex gap-8 text-lg font-semibold tracking-wider relative'>
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="relative"
                        onMouseEnter={() => setHoveredLink(link.href)}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        {link.label}
                    </Link>
                ))}

                <AnimatePresence>
                    {activeLink && (
                        <motion.div
                            className="absolute bottom-0 h-[2px] bg-white"
                            initial={false}
                            layoutId="nav-indicator"
                            animate={{
                                width: activeLink.width,
                                x: links.findIndex(l => l.href === activeLink.href) * 97, // Ajusta este valor según tu gap
                                opacity: 1
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 350,
                                damping: 22,
                                mass: 0.5
                            }}
                        />
                    )}
                </AnimatePresence>
            </nav>

            <Link href='/'>
                <h1 className='whitespace-nowrap text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider text-center justify-self-center'>
                    ANDRES PESCADER ARQ
                </h1>
            </Link>


            {/* X - Burger menu animado! */}
            <div className="flex justify-end lg:hidden">
                <button
                    className="z-50"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Menu"
                >
                    <motion.div
                        className="w-6 flex flex-col gap-1 cursor-pointer"
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                    >
                        <motion.span
                            className="h-0.5 w-full bg-white block"
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: 45, y: 6 }
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                        <motion.span
                            className="h-0.5 w-full bg-white block"
                            variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 }
                            }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        />
                        <motion.span
                            className="h-0.5 w-full bg-white block"
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: -45, y: -6 }
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </motion.div>
                </button>
            </div>

            <div className="hidden lg:block"></div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                        className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 text-2xl"
                    >
                        <motion.div variants={itemVariants}>
                            <Link
                                href='/'
                                onClick={() => setIsOpen(false)}
                                className="hover:underline block py-2"
                            >
                                WORK
                            </Link>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Link
                                href='/contact'
                                onClick={() => setIsOpen(false)}
                                className="hover:underline block py-2"
                            >
                                CONTACT
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}