'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BrainCircuit, Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/referrals', label: 'Referrals' },
  { href: '/vacancies', label: 'Vacancies' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-lg">
      <div className="bg-muted/50 border-b">
        <div className="container mx-auto flex h-10 items-center justify-end px-4 text-sm">
            <div className="hidden md:flex items-center gap-6 text-muted-foreground">
                 <a href="tel:+441234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>+44 1234 567890</span>
                </a>
                <a href="mailto:info@365caresolutions.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>info@365caresolutions.com</span>
                </a>
            </div>
            <div className="hidden md:block ml-6">
                <Button asChild size="sm">
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </div>
        </div>
      </div>
      <div className="container mx-auto flex h-28 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg font-headline"
          onClick={() => setMobileMenuOpen(false)}
        >
          {/* <BrainCircuit className="h-6 w-6 text-primary" />
          <span>365 Care Solutions</span> */}
          <Image
            src="/365-header-logo.webp"
            alt="365 Care Solutions Logo"
            width={1400}
            height={400}
            className="object-contain h-20 w-auto rounded-2xl"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm md:text-xl lg:text-3xl font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-foreground/60'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-card">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b pb-4">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-bold text-lg font-headline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <BrainCircuit className="h-6 w-6 text-primary" />
                  <span>365 Care Solutions</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col gap-6 mt-8 text-lg font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'transition-colors hover:text-primary',
                      pathname === link.href ? 'text-primary' : 'text-foreground/80'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pt-6">
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
