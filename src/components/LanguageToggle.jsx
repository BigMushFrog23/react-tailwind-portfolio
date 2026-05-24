import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export const LanguageToggle = ({ className }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className={cn(
        "px-3 py-1.5 rounded-full text-xs font-semibold border border-primary/40",
        "bg-background/60 backdrop-blur-sm hover:bg-primary/10 transition-colors duration-300",
        "flex items-center gap-1.5",
        className
      )}
    >
      <span className={language === "en" ? "text-primary" : "text-muted-foreground"}>EN</span>
      <span className="text-muted-foreground/50">/</span>
      <span className={language === "fr" ? "text-primary" : "text-muted-foreground"}>FR</span>
    </button>
  );
};
