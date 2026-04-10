"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const SCORE_URL = "https://www.retirementscorecalculator.com/";
const BOOKING_URL = "https://go.retirementscorecalculator.com/book-now";

const navLinks = [
  { label: "How We Help", href: "#services" },
  { label: "About Brad", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-white.png"
            alt="The Simple Plan"
            width={44}
            height={44}
            className="rounded-lg w-auto h-auto"
          />
          <span
            className={`text-lg font-bold tracking-tight transition-colors ${
              scrolled ? "text-text-body" : "text-white"
            }`}
          >
            The Simple Plan
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                scrolled ? "text-text-body" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3">
            <a
              href={SCORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                scrolled
                  ? "border-brand-purple/30 text-brand-purple hover:bg-brand-purple/5 rounded-full px-5"
                  : "border-white/30 text-white hover:bg-white/10 hover:text-white rounded-full px-5 bg-transparent"
              )}
            >
              Get Your Free Score
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-sky-blue hover:bg-sky-blue/90 text-white rounded-full px-5"
              )}
            >
              Book a Call
            </a>
          </div>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={`md:hidden p-2 ${
              scrolled ? "text-text-body" : "text-white"
            }`}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 pt-12">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-text-body"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <a
                  href={SCORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "border-brand-purple/30 text-brand-purple hover:bg-brand-purple/5 rounded-full"
                  )}
                >
                  Get Your Free Score
                </a>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "bg-sky-blue hover:bg-sky-blue/90 text-white rounded-full"
                  )}
                >
                  Book a Call
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
