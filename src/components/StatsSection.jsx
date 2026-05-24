import { useLanguage } from "@/i18n/LanguageContext";

export const StatsSection = () => {
    const { t } = useLanguage();

    return (
        <section id="stats" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {t.stats.title} <span className="text-primary"> {t.stats.titleAccent}</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    {t.stats.subtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {t.stats.items.map((item, idx) => (
                        <div
                            key={idx}
                            className="gradient-border p-8 card-hover text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                {item.value}
                            </div>
                            <p className="text-muted-foreground text-sm">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
