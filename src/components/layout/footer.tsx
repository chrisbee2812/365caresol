import Link from 'next/link';
import { BrainCircuit, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl font-headline">
              <BrainCircuit className="h-7 w-7 text-primary" />
              <span>365 Care Solutions</span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm">
              Providing compassionate and professional support for a better quality of life.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold tracking-wider uppercase text-sm">Navigate</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary text-sm">About Us</Link></li>
                <li><Link href="/services" className="text-muted-foreground hover:text-primary text-sm">Our Services</Link></li>
                <li><Link href="/vacancies" className="text-muted-foreground hover:text-primary text-sm">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider uppercase text-sm">Support</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/referrals" className="text-muted-foreground hover:text-primary text-sm">Make a Referral</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary text-sm">Contact Us</Link></li>
                <li><Link href="/faq" className="text-muted-foreground hover:text-primary text-sm">FAQs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider uppercase text-sm">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary text-sm">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-primary text-sm">Terms of Service</Link></li>
                <li><Link href="/cookie-policy" className="text-muted-foreground hover:text-primary text-sm">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 365 Care Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
