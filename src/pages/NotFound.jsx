import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { StarBackground } from "@/components/StarBackground";

export const NotFound = () => {
    const { t } = useLanguage();
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 text-center">
            <StarBackground />
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-primary">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">{t.notFound.title}</h2>
            <p className="text-muted-foreground mb-8 max-w-md">{t.notFound.desc}</p>
            <Link to="/" className="cosmic-button">
                {t.notFound.back}
            </Link>
        </div>
    );
};
