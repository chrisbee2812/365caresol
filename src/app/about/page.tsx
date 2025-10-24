import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { TEAM_MEMBERS } from "@/lib/data";
import { CheckCircle, Linkedin, Twitter } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const heroImage = PlaceHolderImages.find((img) => img.id === 'about-hero');

const values = [
    { name: "Compassion", description: "We approach every interaction with empathy and kindness." },
    { name: "Respect", description: "We uphold the dignity and autonomy of every individual." },
    { name: "Integrity", description: "We are honest, transparent, and ethical in all we do." },
    { name: "Excellence", description: "We strive for the highest standards in care and support." },
    { name: "Empowerment", description: "We enable individuals to achieve their full potential." },
    { name: "Collaboration", description: "We work in partnership with clients, families, and professionals." }
];

export default function AboutPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[50vh] w-full">
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
                    <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">About 365 Care Solutions</h1>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl text-gray-200">
                        Dedicated to providing exceptional, person-centered care and support.
                    </p>
                </div>
            </section>

            {/* Mission & Story Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-5 gap-12 items-start">
                        <div className="md:col-span-3">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Story</h2>
                            <div className="mt-4 space-y-4 text-muted-foreground">
                                <p>
                                    Founded on the principle that everyone deserves to live a fulfilling and dignified life, 365 Care Solutions was established to provide a higher standard of support for individuals with complex needs. Our journey began with a small, dedicated team who saw a need for more personalized and compassionate care within the community.
                                </p>
                                <p>
                                    From our humble beginnings, we have grown into a trusted provider, known for our unwavering commitment to our clients. We believe in building strong relationships based on trust and respect, working collaboratively to help individuals achieve their goals and live as independently as possible. Our story is one of continuous learning, adaptation, and a deep-seated passion for making a positive difference in people's lives, 365 days a year.
                                </p>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                             <Card className="bg-card shadow-lg">
                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold font-headline mb-4">Our Mission</h3>
                                    <p className="text-muted-foreground italic">
                                        "To empower individuals with diverse needs to live rich and fulfilling lives by providing exceptional, person-centered care and support, grounded in compassion, respect, and integrity."
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Our Values Section */}
            <section className="py-16 md:py-24 bg-card">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Core Values</h2>
                        <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
                            These values are the bedrock of our organization and guide every decision we make.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value) => (
                            <div key={value.name} className="flex items-start gap-4">
                                <CheckCircle className="w-7 h-7 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg">{value.name}</h3>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Team Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet Our Leadership Team</h2>
                        <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
                            Our dedicated leaders bring a wealth of experience and a shared passion for exceptional care.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {TEAM_MEMBERS.map((member) => {
                             const memberImage = PlaceHolderImages.find((img) => img.id === member.imageId);
                             return (
                                <Dialog key={member.name}>
                                    <DialogTrigger asChild>
                                        <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                                            <CardContent className="p-6">
                                                <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-accent">
                                                    {memberImage && <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint} />}
                                                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <h3 className="font-bold text-lg font-headline">{member.name}</h3>
                                                <p className="text-primary">{member.role}</p>
                                            </CardContent>
                                        </Card>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[600px] p-0">
                                        <div className="grid sm:grid-cols-3">
                                            <div className="relative h-48 sm:h-full w-full sm:col-span-1">
                                                {memberImage && (
                                                    <Image src={memberImage.imageUrl} alt={member.name} fill className="object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none" />
                                                )}
                                            </div>
                                            <div className="sm:col-span-2 p-6">
                                                <DialogHeader>
                                                    <DialogTitle className="text-2xl font-headline">{member.name}</DialogTitle>
                                                    <p className="text-primary text-md">{member.role}</p>
                                                </DialogHeader>
                                                <p className="text-muted-foreground mt-4 text-sm">{member.bio}</p>
                                                <div className="mt-4 flex items-center gap-4">
                                                    {member.socials.linkedin && (
                                                        <Link href={member.socials.linkedin} target="_blank" className="text-muted-foreground hover:text-primary">
                                                            <Linkedin className="w-6 h-6" />
                                                            <span className="sr-only">LinkedIn</span>
                                                        </Link>
                                                    )}
                                                     {member.socials.twitter && (
                                                        <Link href={member.socials.twitter} target="_blank" className="text-muted-foreground hover:text-primary">
                                                            <Twitter className="w-6 h-6" />
                                                            <span className="sr-only">Twitter</span>
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                        )})}
                    </div>
                </div>
            </section>
        </div>
    );
}
