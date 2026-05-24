import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { projects } from "@/data/projects";

export const ProjectSection = () => {
    const { t, language } = useLanguage();

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {t.projects.title} <span className="text-primary"> {t.projects.titleAccent} </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    {t.projects.subtitle}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <Link
                            key={key}
                            to={`/projects/${project.id}`}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover block"
                        >
                            <div className="h-48 overflow-hidden bg-secondary/30">
                                <img
                                    src={project.image}
                                    alt={project.title[language]}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6 text-left">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title[language]}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.shortDescription[language]}
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                        {t.projects.viewDetails} <ArrowRight size={14} />
                                    </span>
                                    <div className="flex space-x-3" onClick={(e) => e.stopPropagation()}>
                                        {project.demoUrl && project.demoUrl !== "#" && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                        {project.githubUrl && project.githubUrl !== "#" && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/BigMushFrog23"
                    >
                        {t.projects.checkGithub} <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
