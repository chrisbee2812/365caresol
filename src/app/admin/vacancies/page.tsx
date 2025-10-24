import VacancyForm from "@/components/vacancy-form";

export default function VacanciesAdminPage() {
    return (
        <div className="bg-background">
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">Manage Vacancies</h1>
                            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                                Add, edit, or remove job vacancies from this page.
                            </p>
                        </div>
                        <VacancyForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
