import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SERVICES } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const heroImage = PlaceHolderImages.find(img => img.id === 'service-mental-health');

export default function ServicesPage() {
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
                    <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">Our Care Services</h1>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl text-gray-200">
                        Tailored support designed to empower individuals and enhance their quality of life.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col gap-16 md:gap-24">
                        {SERVICES.map((service, index) => {
                             const serviceImage = PlaceHolderImages.find(p => p.id === service.imageId);
                             return (
                            <div key={service.title} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-row-dense' : ''}`}>
                                <div className={`relative aspect-video rounded-lg overflow-hidden shadow-xl ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                                    {serviceImage && (
                                         <Image
                                            src={serviceImage.imageUrl}
                                            alt={serviceImage.description}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={serviceImage.imageHint}
                                        />
                                    )}
                                </div>
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="bg-accent p-4 rounded-full">
                                            <service.icon className="w-8 h-8 text-accent-foreground" />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold font-headline">{service.title}</h2>
                                    </div>
                                    <p className="text-lg text-muted-foreground mb-6">
                                        {service.description}
                                    </p>
                                    <Accordion type="single" collapsible className="w-full">
                                        {service.details.map((detail) => (
                                            <AccordionItem value={detail.title} key={detail.title}>
                                                <AccordionTrigger className="font-semibold text-lg hover:no-underline">
                                                    {detail.title}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-muted-foreground">
                                                    {detail.content}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
            </section>
        </div>
    );
}
