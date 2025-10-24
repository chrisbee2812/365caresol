export default function PrivacyPolicyPage() {
    return (
        <div className="bg-background">
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                             <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">Privacy Policy</h1>
                             <p className="mt-4 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
                        </div>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                            <h2 className="text-2xl font-bold font-headline text-foreground">1. Introduction</h2>
                            <p>365 Care Solutions ("we", "our", "us") is committed to protecting and respecting your privacy. This policy explains how we collect, use, and share personal information.</p>

                            <h2 className="text-2xl font-bold font-headline text-foreground">2. Information We Collect</h2>
                            <p>We may collect and process the following data about you:</p>
                            <ul>
                                <li>Information you provide by filling in forms on our site (e.g., contact or referral forms).</li>
                                <li>If you contact us, we may keep a record of that correspondence.</li>
                                <li>Details of your visits to our site and the resources that you access.</li>
                            </ul>

                            <h2 className="text-2xl font-bold font-headline text-foreground">3. How We Use Your Information</h2>
                            <p>We use information held about you in the following ways:</p>
                            <ul>
                                <li>To provide you with information or services that you request from us.</li>
                                <li>To carry out our obligations arising from any contracts entered into between you and us.</li>
                                <li>To notify you about changes to our service.</li>
                            </ul>

                            <h2 className="text-2xl font-bold font-headline text-foreground">4. Disclosure of Your Information</h2>
                            <p>We will not share your personal information with third parties without your consent, except where required by law or to fulfill our contractual obligations.</p>
                            
                            <h2 className="text-2xl font-bold font-headline text-foreground">5. Your Rights</h2>
                            <p>You have the right to request access to, correction of, or deletion of your personal data. Please contact us to make such a request.</p>

                             <h2 className="text-2xl font-bold font-headline text-foreground">6. Changes to Our Privacy Policy</h2>
                            <p>Any changes we may make to our privacy policy in the future will be posted on this page. </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
