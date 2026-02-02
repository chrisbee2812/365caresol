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
                    <Image
                        src="/pexels-cliff-booth-4057863.webp"
                        alt="Downs syndrome person smiling whilst talking to caregiver"
                        fill
                        className="object-cover"
                        priority
                        data-ai-hint="Downs syndrome person smiling whilst talking to caregiver"
                    />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">About 365 Care Solutions</h1>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl text-gray-200">
                        Dedicated to providing exceptional, person-centered care and support.
                    </p>
                </div>
            </section>

            {/* Mission & About Us Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-5 gap-12 items-start">
                        <div className="md:col-span-3">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline">About Us</h2>
                            <div className="mt-4 space-y-4 text-muted-foreground">
                                <p>
                                    Welcome to 365 Care Solutions ltd where everyday is an opportunity to make a difference. We are a specialist supported living services provider committed to delivering safe, compassionate, and high-quality care across London that supports people to live independently and with dignity. 
                                </p>
                                <p>
                                    Our service is registered with the Care Quality Commission (CQC), the independent regulator of health and social care in England. This means we meet the required standards for safety, quality, and governance, and we are regularly inspected to ensure we continue to provide care that people can trust.
                                </p>
                                <p>
                                    At 365 Care Solutions ltd we believe everyone deserves the right to live a full, meaningful life - one where choice, respect and independence are at the heart of everything we do. Our support is designed around each individual's strengths, preferences and aspirations, ensuring that every person we work with has the opportunity to thrive in their own home and community. 
                                </p>
                                <p>
                                    Our approach is person centred : We tailor our support around each individual's unique goals, preferences and abilities. We set out to provide specialist care for Autistic Spectrum Disorder, Complex needs, behaviours that may challenge, learning disability and physical disability in a supported living environment with the emphasis on home from home and seamless transition. Whether its daily living assistance, community participation or support with education, we empower the people we support to take control of their lives.
                                </p>
                                <p>
                                    We support people whether they are moving from home, a family setting, or another service, by providing a clear and supportive pathway into our service. We work closely with individuals, families, and professionals to ensure any existing care provision is fully integrated into the transition process. This approach allows for a smooth, informed, and well-planned move, promoting continuity of care, consistency in support, and positive outcomes from day one. Our focus is on ensuring each person experiences a safe, respectful, and well-supported transition, with their needs, preferences, and goals at the centre of every decision.
                                </p>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                             <Card className="bg-card shadow-lg">
                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold font-headline mb-4">Our Mission</h3>
                                    <p className="text-muted-foreground italic">
                                        "To deliver high quality, bespoke supported living by creating safe, inclusive and nurturing environments where individuals are empowered to live fulfilling, independent lives with confidence and purpose."
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-card shadow-lg mt-8">
                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold font-headline mb-4">Care Quality Commission Registered</h3>
                                    <p className="text-muted-foreground italic">
                                        Our service is registered with the Care Quality Commission (CQC), the independent regulator of health and social care in England.
                                    </p>
                                    <p className="text-muted-foreground text-lg italic mt-4">
                                        Current CQC overall rating: <strong>Good</strong>
                                    </p>
                                    <p className="text-muted-foreground text-lg italic mt-4">
                                        View our CQC profile <Link href="https://www.cqc.org.uk/location/1-11210283645" target="_blank" className="text-primary underline">here</Link>.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Our Values Section
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
            </section> */}

            {/* Mission Section */}
            <section className="py-16 md:py-24 bg-card">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative overflow-hidden">
                            <Image
                                src="/public-transport.webp"
                                alt="Service user on a train playing on phone"
                                width={800}
                                height={1200}
                                className="w-1/4 md:w-2/3 rounded-lg object-cover shadow-xl justify-center mx-auto"
                                data-ai-hint="Service user on a train playing on phone"
                            />
                        </div>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Core Values</h2>
                            <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
                                These values are the bedrock of our organization and guide every decision we make.
                            </p>
                            <div className="grid grid-cols-1 gap-8 mt-12">
                                {values.map((value) => (
                                    <div key={value.name} className="flex items-start gap-4">
                                        <CheckCircle className="w-7 h-7 text-accent flex-shrink-0 mt-4" />
                                        <div>
                                            <h3 className="font-bold text-lg">{value.name}</h3>
                                            <p className="text-muted-foreground">{value.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Team</h2>
                    <div className="mt-4 space-y-4 text-muted-foreground">
                        <p>
                            Our team is made up of compassionate, trained professionals who are passionate about making a difference. We are a team made up of two registered mental health nurses, learning disability expertise, CQC registered manager and support workers. Every member of our staff shares a commitment to delivering high quality person centred care that promotes growth, safety and independence.
                        </p>
                        <p>
                            Our dedicated professionals bring compassion, skill and experience to every aspect of care. We work closely with families, local authorities and multidisciplinary professionals to ensure a consistent, holistic approach that puts the individual first. At 365 Care solutions ltd, we accept challenges as part of the job - approaching every situation with patience, understanding and a belief that progress is always possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 md:py-24 bg-card">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Story</h2>
                    <div className="mt-4 space-y-4 text-muted-foreground">
                        <p>
                            365 Care Solutions  was  founded with a simple belief - that everyone regardless of ability or need deserves to live a fulfilling life with dignity , respect and independence. 
                        </p>
                        <p>
                            Our journey began when our founder, driven by years of experience in the health and social care sector recognised and  identified that certain individuals were domiciled in inappropriate settings and needs and lifestyles were not being met. The team knew more bespoke tailor made packages could be offered with an experienced team used to building relationships where  individuals could thrive. By involving families and all stakeholders every step of the way we knew we could reach new heights with even the most challenging individuals. And that has proved to be the case.
                        </p>
                    </div>
                </div>
            </section>

            {/* Management Team Section
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
            </section> */}
        </div>
    );
}
