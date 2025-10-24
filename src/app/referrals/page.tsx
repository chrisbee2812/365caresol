import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import ReferralsForm from "@/components/referrals-form";

const heroImage = PlaceHolderImages.find((img) => img.id === 'referrals-hero');

export default function ReferralsPage() {
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
                    <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">Make a Referral</h1>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl text-gray-200">
                        Begin the process of accessing our expert support services by completing the form below.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline">Referral Form</h2>
                            <p className="mt-2 text-lg text-muted-foreground">
                                Please provide as much detail as possible to help us understand the individual's needs. All information is confidential.
                            </p>
                        </div>
                        <ReferralsForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
