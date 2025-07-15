const translations = {
    fr: {
        title: "Mon portfolio - Antoine-Vi Son Nguyen",
        subtitle: "L'Esprit Créatif Carolo au Cœur du Code",
        about: "À propos de moi",
        portfolio: "Portfolio",
        
        contact: "Contact",
        cv: "📄 Mon CV",
        description1: "Basé à Charleroi, je suis actuellement étudiant en bachelier de développement d'applications à l'Henallux. Curieux de nature et passionné par l'informatique, l'intelligence artificielle et les technologies émergentes.",
        description2: "Animé par le désir de repousser mes limites, je suis prêt à relever tous les défis pour contribuer à la société de demain.",
        project1: "Développement d'une application Java \"Book Rental System\"",
        project2: "Gestion d'un projet \"Animal Park Management\"",
        hero: "Développeur Passionné | Étudiant à l'Henallux | Esprit Créatif",

        mail: "Si vous désirez m'adresser un mail :",
    },
    en: {
        title: "My Portfolio - Antoine-Vi Son Nguyen",
        subtitle: "The Creative Carolo Spirit at the Heart of Code",
        about: "About Me",
        portfolio: "Portfolio",
        contact: "Contact",
        cv: "📄 My CV",
        hero: "Passionate Developer | Henallux Student | Creative Mind",
        description1: "Based in Charleroi, I am currently studying application development at Henallux. Naturally curious and passionate about IT, AI and emerging technologies.",
        description2: "Driven by the desire to push my limits, I'm ready to take on any challenge to help build the society of tomorrow.",
        project1: "Java Application Development: \"Book Rental System\"",
        project2: "Project Management: \"Animal Park Management\"",
        mail: "If you wish to send me an email:",
    },
    nl: {
        title: "Mijn portfolio - Antoine-Vi Son Nguyen",
        subtitle: "De Creatieve Carolo-Geest in het Hart van Code",
        about: "Over mij",
        portfolio: "Portfolio",
        contact: "Contact",
        cv: "📄 Mijn CV",
        hero: "Gepassioneerde Ontwikkelaar | Henallux Student | Creatieve Geest",
        description1: "Gebaseerd in Charleroi, studeer ik momenteel applicatieontwikkeling aan de Henallux. Van nature nieuwsgierig en gepassioneerd door IT, AI en opkomende technologieën.",
        description2: "Gedreven door de wens om mijn grenzen te verleggen, ben ik klaar om elke uitdaging aan te gaan om bij te dragen aan de maatschappij van morgen.",
        project1: "Java Applicatieontwikkeling: \"Boekverhuursysteem\"",
        project2: "Projectbeheer: \"Dierenparkbeheer\"",
        mail: "Als je me een e-mail wilt sturen:",
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const elements = {
        title: document.querySelector("main h1"),
        subtitle: document.querySelector("#apropos h2"),
        about: document.querySelector("nav ul li:first-child a"),
        portfolioNav: document.querySelector("nav ul li:last-child a"),
        description1: document.querySelectorAll("#apropos p")[0],
        description2: document.querySelectorAll("#apropos p")[1],
        project1: document.querySelectorAll("#activite h3")[0],
        project2: document.querySelectorAll("#activite h3")[1],
        portfolioTitle: document.querySelector("#activite h2"),
        mail: document.querySelector("footer p"),
        cv: document.querySelector(".cv-download a"),
        hero: document.querySelector(".subtitle"), 

    };

    document.getElementById("language").addEventListener("change", (e) => {
        const lang = e.target.value;
        const t = translations[lang];
        elements.title.textContent = t.title;
        elements.subtitle.textContent = t.subtitle;
        elements.about.textContent = t.about;
        elements.portfolioNav.textContent = t.portfolio;
        elements.description1.textContent = t.description1;
        elements.description2.textContent = t.description2;
        elements.project1.textContent = t.project1;
        elements.project2.textContent = t.project2;
        elements.portfolioTitle.textContent = t.portfolio;
        elements.mail.textContent = t.mail;
        elements.cv.textContent = t.cv;
        elements.hero.textContent = t.hero;

    });
});

