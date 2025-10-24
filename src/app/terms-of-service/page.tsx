export default function TermsOfServicePage() {
    return (
        <div className="bg-background">
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                             <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">Terms of Service</h1>
                             <p className="mt-4 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
                        </div>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                           <h2 className="text-2xl font-bold font-headline text-foreground">1. Agreement to Terms</h2>
                           <p>By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.</p>

                           <h2 className="text-2xl font-bold font-headline text-foreground">2. Use of Service</h2>
                           <p>You agree to use our services only for lawful purposes. You must not use our website in any way that is unlawful, illegal, fraudulent, or harmful.</p>

                           <h2 className="text-2xl font-bold font-headline text-foreground">3. Intellectual Property</h2>
                           <p>The service and its original content, features, and functionality are and will remain the exclusive property of 365 Care Solutions and its licensors.</p>

                           <h2 className="text-2xl font-bold font-headline text-foreground">4. Links To Other Web Sites</h2>
                           <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by 365 Care Solutions. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.</p>

                           <h2 className="text-2xl font-bold font-headline text-foreground">5. Limitation Of Liability</h2>
                           <p>In no event shall 365 Care Solutions, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

                           <h2 className="text-2xl font-bold font-headline text-foreground">6. Governing Law</h2>
                           <p>These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
