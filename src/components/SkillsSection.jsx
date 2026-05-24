import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";

const skills = [
    /* Frontend */
    { name: "HTML/CSS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },

    /* Backend */
    { name: "Python", category: "Backend" },
    { name: "PHP", category: "Backend" },

    /* Database */
    { name: "SQL", category: "Database" },

    /* Game Dev */
    { name: "GDScript", category: "Game Development" },

    /* Tools */
    { name: "VSCode", category: "Tools" },
    { name: "Github", category: "Tools" },
    { name: "Xampp", category: "Tools" },
    { name: "Docker", category: "Tools" },
];

const categories = ["all", "Frontend", "Backend", "Database", "Game Development", "Tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const { t } = useLanguage();

    const categoryLabel = {
        all: t.skills.categories.all,
        Frontend: t.skills.categories.frontend,
        Backend: t.skills.categories.backend,
        Database: t.skills.categories.database,
        "Game Development": t.skills.categories.game,
        Tools: t.skills.categories.tools,
    };

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {t.skills.title} <span className="text-primary"> {t.skills.titleAccent}</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {categoryLabel[category]}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-5 rounded-lg shadow-xs card-hover text-center"
                        >
                            <h3 className="font-semibold text-base md:text-lg">
                                {skill.name}
                            </h3>
                            <p className="text-xs text-muted-foreground mt-1">
                                {categoryLabel[skill.category]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
