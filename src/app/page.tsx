import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  HeartHandshake,
  Lightbulb,
  Quote,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SERVICES } from '@/lib/data';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-landing');

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'Family Member',
    quote: "365 Care Solutions has been a blessing for our family. The compassionate and professional care they provide for my brother has made a world of difference. We've seen such a positive change in him.",
  },
  {
    name: 'John D.',
    role: 'Client',
    quote: "The support I receive is tailored to my needs, and the staff are always so understanding and patient. I feel more independent and confident than ever before. Thank you, 365 Care Solutions!",
  },
  {
    name: 'Dr. Emily Carter',
    role: 'Healthcare Professional',
    quote: "I frequently refer individuals to 365 Care Solutions and am consistently impressed by their commitment to person-centered care. They are a reliable and high-quality provider in our community.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
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
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
            Compassionate Care, Every Step of the Way
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200">
            Providing exceptional support for individuals with mental health conditions, learning disabilities, and physical disabilities.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/services">Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-black">
              <Link href="/referrals">Make a Referral</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Specialist Care Services</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a range of tailored services designed to empower individuals and enhance their quality of life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const serviceImage = PlaceHolderImages.find(p => p.id === service.imageId);
              return(
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="p-0">
                  {serviceImage && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={serviceImage.imageUrl}
                        alt={serviceImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={serviceImage.imageHint}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-4">
                       <div className="bg-accent p-3 rounded-full">
                         <service.icon className="w-6 h-6 text-accent-foreground" />
                       </div>
                       <CardTitle className="text-2xl font-headline">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="link" className="p-0 h-auto text-primary">
                    <Link href="/services">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            )})}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://picsum.photos/seed/mission/800/600"
                alt="Caregiver assisting an elderly person"
                fill
                className="object-cover"
                data-ai-hint="caregiver support"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Commitment to Care</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                At 365 Care Solutions, our mission is to deliver the highest standard of care with dignity and respect. We are dedicated to creating a safe, nurturing, and supportive environment where every individual can thrive.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent p-3 rounded-full">
                    <HeartHandshake className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Person-Centered</h3>
                    <p className="text-muted-foreground text-sm">Our care plans are built around the individual, focusing on their unique needs, goals, and aspirations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent p-3 rounded-full">
                    <Lightbulb className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Empowerment</h3>
                    <p className="text-muted-foreground text-sm">We empower individuals by promoting independence, choice, and inclusion in all aspects of their lives.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">What People Say About Us</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from our clients, their families, and healthcare professionals about their experience with 365 Care Solutions.
            </p>
          </div>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col h-full shadow-md">
                      <CardContent className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <Quote className="w-8 h-8 text-primary mb-4" />
                          <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                        </div>
                        <div className="mt-6">
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
