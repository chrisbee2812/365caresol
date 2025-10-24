import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    {
        question: "What types of services do you offer?",
        answer: "We provide a range of person-centered care and support services for individuals with mental health conditions, learning disabilities, and physical disabilities. Please see our Services page for more details."
    },
    {
        question: "How do I make a referral?",
        answer: "You can make a referral through our online referral form on the 'Referrals' page. If you have any questions, please don't hesitate to contact us."
    },
    {
        question: "What areas do you cover?",
        answer: "We primarily operate in Manchester, Liverpool, and Birmingham, but we are continually expanding our reach. Please contact us to discuss your specific location."
    },
    {
        question: "How are your support plans created?",
        answer: "Our support plans are co-created with the individual, their families (where appropriate), and any involved healthcare professionals. We believe in a collaborative, person-centered approach to ensure all needs and goals are met."
    },
    {
        question: "Are your staff trained and qualified?",
        answer: "Yes, all our staff undergo rigorous background checks and receive comprehensive training, including any specialized training required for the individuals they support. We are committed to continuous professional development."
    }
];

export default function FAQPage() {
    return (
        <div className="bg-background">
             <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">Frequently Asked Questions</h1>
                            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                                Find answers to common questions about our services and approach.
                            </p>
                        </div>
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem value={`item-${index}`} key={index} className="bg-card rounded-lg shadow-sm border px-6">
                                    <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pt-2">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
        </div>
    );
}
