import Link from 'next/link';
import Image from 'next/image';
import { BrainCircuit, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          <div className="md:col-span-2 grid md:grid-cols-2 mr-8">
            <Image
              src="/365logo-ready-for-round-border.webp"
              alt="365 Care Solutions Logo"
              width={866}
              height={866}
              className="h-40 w-auto rounded-full"
            />
            <div>
              <Link href="/" className="flex gap-2 font-bold text-xl font-headline">
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
          </div>

          <div className='md:col-span-3'>
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
            <div>
              <p className="text-muted-foreground text-lg italic mt-4">
                View our Care Quality Commission profile <Link href="https://www.cqc.org.uk/location/1-11210283645" target="_blank" className="text-primary underline">here</Link>.
              </p>
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
