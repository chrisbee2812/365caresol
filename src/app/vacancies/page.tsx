import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { VACANCIES } from "@/lib/data";
import { MapPin, Clock, ArrowRight } from "lucide-react";

const heroImage = PlaceHolderImages.find((img) => img.id === 'vacancies-hero');

export default function VacanciesPage() {
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
                    <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">Join Our Team</h1>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl text-gray-200">
                        Make a difference and grow your career with a team that cares.
                    </p>
                </div>
            </section>

            {/* Vacancies List Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline">Current Vacancies</h2>
                            <p className="mt-2 text-lg text-muted-foreground">
                                We're looking for passionate individuals to join us in our mission.
                            </p>
                        </div>
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {VACANCIES.map((vacancy) => (
                                <AccordionItem value={vacancy.id} key={vacancy.id} className="border-b-0">
                                     <AccordionTrigger className="bg-card p-6 rounded-lg shadow-md hover:no-underline hover:bg-secondary/50 transition-colors data-[state=open]:rounded-b-none data-[state=open]:shadow-lg">
                                        <div className="text-left w-full">
                                            <h3 className="text-xl font-bold font-headline">{vacancy.title}</h3>
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-2">
                                                <div className="flex items-center gap-1.5">
                                                    <MapPin className="h-4 w-4" />
                                                    <span>{vacancy.location}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Clock className="h-4 w-4" />
                                                    <Badge variant={vacancy.type === 'Full-time' ? 'default' : 'secondary'} className="bg-accent text-accent-foreground">{vacancy.type}</Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-card p-6 rounded-b-lg shadow-lg -mt-2">
                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="font-semibold mb-2">Job Description</h4>
                                                {vacancy.description.map((p, i) => <p key={i} className="text-muted-foreground">{p}</p>)}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2">Key Responsibilities</h4>
                                                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                                    {vacancy.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
                                                </ul>
                                            </div>
                                             <div>
                                                <h4 className="font-semibold mb-2">Qualifications & Skills</h4>
                                                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                                    {vacancy.qualifications.map((item, i) => <li key={i}>{item}</li>)}
                                                </ul>
                                            </div>
                                            <Button asChild>
                                                <a href={`mailto:careers@365caresolutions.com?subject=Application for ${vacancy.title}`}>
                                                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                                                </a>
                                            </Button>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                         <div className="text-center mt-12">
                            <p className="text-muted-foreground">Don't see a suitable role? We're always keen to hear from talented individuals.</p>
                            <Button variant="link" asChild className="text-primary text-lg mt-2">
                                <a href="mailto:careers@365caresolutions.com?subject=General Career Inquiry">Send us your CV</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
