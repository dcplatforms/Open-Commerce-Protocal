'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Github, Menu, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ['rgba(4, 7, 17, 0)', 'rgba(4, 7, 17, 0.8)']
  );

  const headerBlur = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  );

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <motion.header
      style={{ backgroundColor: headerBg, backdropFilter: headerBlur }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 border-b border-white/10' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
             <span className="text-white font-bold text-xl">O</span>
          </div>
          <span className="font-montserrat font-bold text-xl tracking-tight hidden sm:block">
            OCP <span className="text-primary">Docs</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/docs/home">Docs</NavLink>
          <NavLink href="/docs/api/wallet">API Reference</NavLink>
          <NavLink href="/docs/ecosystem">Ecosystem</NavLink>
          <a
            href="https://github.com/dcplatforms/Open-Commerce-Protocol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
              <Search size={16} />
            </div>
            <input
              type="text"
              placeholder="Search docs..."
              className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-64 transition-all"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-white/30 border border-white/20 rounded px-1.5 py-0.5">
              ⌘K
            </div>
          </div>

          <button className="flex items-center gap-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-1.5 text-sm transition-colors">
            v1.0
            <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
    </Link>
  );
}