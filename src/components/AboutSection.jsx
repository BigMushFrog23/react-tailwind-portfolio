import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative"> 
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Game Developer</h3>

                        <p className="text-muted-foreground">
                            I am a BTS SIO SLAM student (2024–2026) with 1.5 months of internship experience in building responsive,
                            performant websites that simplified company processes.
                            I mainly used HTML, CSS, JavaScript, PHP, and MySQL.
                        </p>

                        <p className="text-muted-foreground">
                            I’m passionate about creating modern,
                            user-friendly websites and useful applications,
                            and I enjoy developing interactive games with Godot.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a href="../public/CV_Jeremy_Popov.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
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
                                    <h4 className="font-semibold text-lg"> Web Developement </h4>
                                    <p className="text-muted-foreground">
                                        Building clean, responsive, and efficient websites that improve user experience with modern technologies.
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
                                    <h4 className="font-semibold text-lg"> Game Developement </h4>
                                    <p className="text-muted-foreground">
                                         Designing and building immersive, interactive games with Godot, focusing on creativity and smooth gameplay experiences.
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
                                    <h4 className="font-semibold text-lg"> Project Management </h4>
                                    <p className="text-muted-foreground">
                                        Organizing and managing projects to deliver effective and timely results from start to finish.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};