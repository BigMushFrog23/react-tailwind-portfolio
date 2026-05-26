import { Briefcase, Code, GraduationCap, User } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";

export const AboutSection = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState("formations");
    const tabItems = t.about.experience[activeTab];
    const TabIcon = activeTab === "formations" ? GraduationCap : Briefcase;
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {t.about.title} <span className="text-primary"> {t.about.titleAccent}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">{t.about.heading}</h3>

                        <p className="text-muted-foreground">
                            {t.about.p1}
                        </p>

                        <p className="text-muted-foreground">
                            {t.about.p2}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {t.about.getInTouch}
                            </a>

                            <a href="CV_Jeremy_Popov.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                {t.about.downloadCV}
                            </a>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> {t.about.cards.web.title} </h4>
                                    <p className="text-muted-foreground">
                                        {t.about.cards.web.desc}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> {t.about.cards.game.title} </h4>
                                    <p className="text-muted-foreground">
                                        {t.about.cards.game.desc}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> {t.about.cards.pm.title} </h4>
                                    <p className="text-muted-foreground">
                                        {t.about.cards.pm.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education & Experience timeline with tabs */}
                <div className="mt-20">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
                        {t.about.experience.title}
                    </h3>

                    <div className="flex justify-center gap-3 mb-12">
                        {["formations", "experiences"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={cn(
                                    "px-5 py-2 rounded-full transition-colors duration-300 text-sm font-medium",
                                    activeTab === tab
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary/70 text-foreground hover:bg-secondary"
                                )}
                            >
                                {t.about.experience.tabs[tab]}
                            </button>
                        ))}
                    </div>

                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 md:-translate-x-1/2" />

                        <div className="space-y-12">
                            {tabItems.map((item, idx) => (
                                <div key={`${activeTab}-${idx}`} className="relative md:grid md:grid-cols-2 md:gap-8 items-start">
                                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 -translate-y-0 mt-2 ring-4 ring-background" />

                                    <div className={`pl-12 md:pl-0 ${idx % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                                        <div className="gradient-border p-6 card-hover text-left md:inline-block">
                                            <div className="flex items-center gap-2 mb-2 text-primary">
                                                <TabIcon className="h-5 w-5" />
                                                <span className="text-sm font-semibold">{item.period}</span>
                                            </div>
                                            <h4 className="font-semibold text-lg mb-1">{item.place}</h4>
                                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
