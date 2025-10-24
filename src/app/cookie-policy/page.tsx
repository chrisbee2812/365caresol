export default function CookiePolicyPage() {
    return (
        <div className="bg-background">
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                             <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">Cookie Policy</h1>
                             <p className="mt-4 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
                        </div>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                           <h2 className="text-2xl font-bold font-headline text-foreground">1. What Are Cookies</h2>
                           <p>As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies.</p>

                           <h2 className="text-2xl font-bold font-headline text-foreground">2. How We Use Cookies</h2>
                           <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>

                           <h2 className="text-2xl font-bold font-headline text-foreground">3. Disabling Cookies</h2>
                           <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.</p>

                           <h2 className="text-2xl font-bold font-headline text-foreground">4. The Cookies We Set</h2>
                           <ul>
                                <li>
                                    <strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page that is affected by your preferences.
                                </li>
                           </ul>

                           <h2 className="text-2xl font-bold font-headline text-foreground">5. More Information</h2>
                           <p>Hopefully, that has clarified things for you. If you are still looking for more information, then you can contact us through one of our preferred contact methods.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
