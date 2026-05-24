export const projects = [
  {
    id: "cv-analyzer",
    title: {
      en: "AI-Integrated CV Analyzer",
      fr: "Analyseur de CV avec IA",
    },
    shortDescription: {
      en: "Uses AI to provide CV feedback within seconds.",
      fr: "Utilise l'IA pour fournir des retours sur le CV en quelques secondes.",
    },
    overview: {
      en: "A web application that leverages AI to analyze CVs and instantly provide structured feedback on formatting, clarity, and relevance. Built to help job-seekers iterate on their resume without waiting on a human reviewer.",
      fr: "Une application web qui exploite l'IA pour analyser des CV et fournir instantanément des retours structurés sur la mise en forme, la clarté et la pertinence. Conçue pour aider les candidats à itérer sur leur CV sans attendre un relecteur humain.",
    },
    role: {
      en: "Designed and built the full application — frontend interface, backend processing pipeline, and AI integration.",
      fr: "Conception et développement complets — interface frontend, pipeline backend et intégration de l'IA.",
    },
    image: "/projects/Project3.svg",
    tags: ["Python", "AI", "JavaScript", "HTML/CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "invoice-validator",
    title: {
      en: "Automated Invoice Validator with OCR",
      fr: "Validateur de Factures Automatisé avec OCR",
    },
    shortDescription: {
      en: "Automation script for invoice validation using OCR.",
      fr: "Script d'automatisation pour la validation de factures via OCR.",
    },
    overview: {
      en: "An automation tool that uses Optical Character Recognition (OCR) to extract data from invoices, validate the contents against expected rules, and flag anomalies — eliminating tedious manual checks.",
      fr: "Un outil d'automatisation qui utilise la reconnaissance optique de caractères (OCR) pour extraire les données des factures, valider le contenu selon des règles attendues et signaler les anomalies — éliminant les vérifications manuelles fastidieuses.",
    },
    role: {
      en: "Built the OCR pipeline, validation rules engine, and reporting output during internship work.",
      fr: "Développement du pipeline OCR, du moteur de règles de validation et du système de reporting durant mon stage.",
    },
    image: "/projects/Project3.svg",
    tags: ["Python", "OCR", "Automation"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "inventory-app",
    title: {
      en: "Inventory Management App",
      fr: "Application de Gestion de Stock",
    },
    shortDescription: {
      en: "Simplified inventory interaction for company users.",
      fr: "Interaction de stock simplifiée pour les utilisateurs de l'entreprise.",
    },
    overview: {
      en: "A stock management application with QR code scanning and real-time alerts that simplified how company users interact with inventory — built during my internship and used in production.",
      fr: "Une application de gestion de stock avec scan QR code et alertes en temps réel, qui a simplifié l'interaction des utilisateurs de l'entreprise avec l'inventaire — développée pendant mon stage et utilisée en production.",
    },
    role: {
      en: "Full-stack developer — built the responsive interface, QR scanning flow, and alert system.",
      fr: "Développeur full-stack — conception de l'interface réactive, du flux de scan QR et du système d'alertes.",
    },
    image: "/projects/Project3.svg",
    tags: ["JavaScript", "PHP", "MySQL", "HTML/CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const getProjectById = (id) => projects.find((p) => p.id === id);
