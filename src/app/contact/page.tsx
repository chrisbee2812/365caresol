import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import ContactForm from "@/components/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

const heroImage = PlaceHolderImages.find((img) => img.id === 'contact-hero');

const contactDetails = [
  { icon: Phone, title: "Phone", content: "+44 1234 567890", href: "tel:+441234567890" },
  { icon: Mail, title: "Email", content: "info@365caresolutions.com", href: "mailto:info@365caresolutions.com" },
  { icon: MapPin, title: "Address", content: "123 Care Street, Manchester, M1 1AA", href: "#" },
];

export default function ContactPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[50vh] w-full bg-card">
                {heroImage && (
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="object-cover"
                        priority
                        data-ai-hint={heroImage.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">Get In Touch</h1>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl text-gray-200">
                        We're here to help. Contact us with any questions or to discuss your needs.
                    </p>
                </div>
            </section>

            {/* Form & Details Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold font-headline mb-4">Contact Information</h2>
                            <p className="text-muted-foreground mb-8">
                                Reach out to us through any of the following channels. We aim to respond to all inquiries within 24 hours.
                            </p>
                            <div className="space-y-6">
                                {contactDetails.map((detail) => (
                                    <div key={detail.title} className="flex items-start gap-4">
                                        <div className="bg-accent text-accent-foreground p-3 rounded-full flex-shrink-0">
                                            <detail.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">{detail.title}</h3>
                                            <a href={detail.href} className="text-muted-foreground hover:text-primary transition-colors">{detail.content}</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                           <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
