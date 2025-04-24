'use client'
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="grid grid-cols-[1fr_auto_1fr] items-center max-w-[1400px] mx-auto w-full h-32 p-4 lg:px-8 relative">

            {/* Espaciador izq en desktop (para balancear) */}
            <div className="block lg:hidden"></div>
            {/* Nav Desktop - Izquierda */}
            <nav className='hidden lg:flex gap-8 text-lg font-semibold tracking-wider'>
                <Link href='/'>WORK</Link>
                <Link href='/contact'>CONTACT</Link>
            </nav>

            {/* Título - Centrado absoluto */}
            <h1 className='whitespace-nowrap text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider text-center justify-self-center'>
                ANDRES PESCADER ARQ
            </h1>

            {/* Burger Icon - Derecha (solo móvil) */}
            <div className="flex justify-end lg:hidden">
                <button
                    className="z-50"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Menu"
                >
                    <div className={`w-6 flex flex-col gap-1 cursor-pointer transition-all ${isOpen ? 'rotate-45 translate-y-1' : ''}`}>
                        <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'rotate-90 translate-y-[2px] translate-x-[-3px]' : ''}`}></span>
                        <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'rotate-180 translate-y-[-10px] translate-x-[-3px]' : ''}`}></span>
                    </div>
                </button>
            </div>

            {/* Espaciador derecho en desktop (para balancear) */}
            <div className="hidden lg:block"></div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 text-2xl">
                    <Link
                        href='/'
                        onClick={() => setIsOpen(false)}
                        className="hover:underline"
                    >
                        WORK
                    </Link>
                    <Link
                        href='/contact'
                        onClick={() => setIsOpen(false)}
                        className="hover:underline"
                    >
                        CONTACT
                    </Link>
                </div>
            )}
        </header>
    );
}