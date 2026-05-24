import { HeadphonesIcon, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils"
import { useToast } from '@/hooks/use-toast'
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export const ContactSection = () => {
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { t } = useLanguage();

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: t.contact.toastTitle,
                description: t.contact.toastDesc,
            });
            setIsSubmitting(false);
        }, 1500);
    }
    return (
    <section
        id="contact"
        className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className=" text-3xl md:text-4xl font-bold mb-4 text-center">
                {t.contact.title} <span className="text-primary"> {t.contact.titleAccent}</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                {t.contact.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                        {t.contact.infoTitle}
                    </h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> {t.contact.email}</h4>
                                <a
                                    href="mailto:popov.jeremy.v@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    popov.jeremy.v@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> {t.contact.phone}</h4>
                                <a
                                    href="tel:+33782111522"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    +33 7 82 11 15 22
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> {t.contact.location}</h4>
                                <span className="text-muted-foreground">
                                    {t.contact.locationValue}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4"> {t.contact.connect}</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://discord.com/users/602091847371718681" target="_blank" rel="noreferrer">
                                <HeadphonesIcon />
                            </a>
                            <a href="https://linkedin.com/in/jeremy-popov-00ba89333" target="_blank" rel="noreferrer">
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6"> {t.contact.formTitle}</h3>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium mb-2"
                            >
                                {t.contact.yourName}
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder={t.contact.namePlaceholder}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-2"
                            >
                                {t.contact.yourEmail}
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder={t.contact.emailPlaceholder}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium mb-2"
                            >
                                {t.contact.yourMessage}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder={t.contact.messagePlaceholder}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                        >
                            {isSubmitting ? t.contact.sending : t.contact.send}
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
};
