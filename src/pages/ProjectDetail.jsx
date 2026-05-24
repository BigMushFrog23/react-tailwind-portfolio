import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { getProjectById } from "@/data/projects";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export const ProjectDetail = () => {
    const { id } = useParams();
    const { t, language } = useLanguage();
    const project = getProjectById(id);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
                <StarBackground />
                <h1 className="text-3xl font-bold mb-4">{t.notFound.title}</h1>
                <Link to="/" className="cosmic-button">
                    {t.notFound.back}
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle />
            <StarBackground />
            <NavBar />

            <main className="pt-32 pb-24 px-4">
                <div className="container mx-auto max-w-4xl">
                    <Link
                        to="/#projects"
                        className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8"
                    >
                        <ArrowLeft size={18} />
                        {t.projects.backToProjects}
                    </Link>

                    <div className="rounded-2xl overflow-hidden bg-card shadow-lg mb-10">
                        <div className="h-64 md:h-80 bg-secondary/30 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title[language]}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-8 md:p-12 text-left">
                            <h1 className="text-3xl md:text-4xl font-bold mb-3">
                                {project.title[language]}
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8">
                                {project.shortDescription[language]}
                            </p>

                            <div className="mb-8">
                                <h2 className="text-sm uppercase tracking-wide text-primary font-semibold mb-3">
                                    {t.projects.technologies}
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-sm uppercase tracking-wide text-primary font-semibold mb-3">
                                    {t.projects.overview}
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.overview[language]}
                                </p>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-sm uppercase tracking-wide text-primary font-semibold mb-3">
                                    {t.projects.role}
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.role[language]}
                                </p>
                            </div>

                            {(project.demoUrl !== "#" || project.githubUrl !== "#") && (
                                <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                                    {project.demoUrl && project.demoUrl !== "#" && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="cosmic-button inline-flex items-center gap-2"
                                        >
                                            <ExternalLink size={16} /> Live Demo
                                        </a>
                                    )}
                                    {project.githubUrl && project.githubUrl !== "#" && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 inline-flex items-center gap-2"
                                        >
                                            <Github size={16} /> GitHub
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
