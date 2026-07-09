/* ==========================================================
   SCIENTIST AI TEAM PAGE
   team.js
   ========================================================== */


/* ==========================================================
   TEAM DATA
   ========================================================== */

const members = [

    {
        id: "maillard",

        name: "Odalric-Ambrym Maillard",

        institute: "INRIA & Scientist AI",

        role: "Co-Founder & Chief Scientific Officer",

        category: "research",

        image:
            "assets/people/maillard.jpg",

        description:
            "Leads the scientific vision of Scientist AI, focusing on reinforcement learning, active experimentation, scientific discovery, and the foundations of autonomous scientific reasoning.",

        motivation:
            "Building systems capable of discovering, understanding and transmitting knowledge in ways that amplify human creativity rather than replace it.",

        quote:
            "The ultimate goal is not to optimize a reward function, but to understand the world deeply enough to ask better questions.",
    },

    {
        id: "fauvel",

        name: "Tristan Fauvel",

        institute: "BaysicLabs & Scientist AI",

        role: "Co-Founder & Placeholder Role",

        category: "research",

        image:
            "assets/people/fauvel.jpg",

        description:
            "[TBD] Leads the organizational strategy, partnerships, long-term development and institutional growth of Scientist AI.",

        motivation:
            "[TBD] Creating the conditions that allow ambitious scientific ideas to become reality and generate lasting societal impact.",

        quote:
            "[TBD] Transformative discoveries emerge when exceptional people are united around a mission larger than themselves.",

    },

    {
        id: "ortner",

        name: "Ronald Ortner",

        institute: "TU Leoben, Austria",

        role: "Reinforcement Learning Advisor",

        category: "research",

        image:
            "assets/people/RonaldOrtner.jpg",

        description:
            "[TBD] Provides expertise in reinforcement learning theory, sequential decision making, active learning and causal experimentation.",

        motivation:
            "[TBD] Advancing the theoretical foundations of scientific intelligence.",

        quote:
            "TBD",

    },



    
    {
        id: "Jonsson",

        name: "Anders Jonsson",

        institute: "University Pompeu Fabra, Spain",

        role: "Reinforcement Learning Advisor",

        category: "research",

        image:
            "assets/people/AndersJonsson.jpg",

        description:
            "TBD",

        motivation:
            "TBD",

        quote:
            "TBD",
    },


    {
        id: "Villar",

        name: "Sofia Villar",

        institute: "Cambridge University, MRC Biostatistics Unit, UK",

        role: "Reinforcement Learning Advisor",

        category: "research",

        image:
            "assets/people/SofiaVillar.jpg",

        description:
            "TBD",

        motivation:
            "TBD",

        quote:
            "TBD",

    },

    
    {
        id: "Nyambo",

        name: "Devotha Nymabo",

        institute: "ComTech Alliance, Tanzania",

        role: "Placeholder Role",

        category: "engineering",

        image:
            "assets/people/DevothaNyambo.jpg",

        description:
            "TBD",

        motivation:
            "TBD",

        quote:
            "TBD",

    },




    
    {
        id: "Umberto",

        name: "Umberto Colella",

        institute: "Scientist AI",

        role: "Placeholder Role",

        category: "engineering",

        image:
            "assets/people/Umberto.png",

        description:
            "TBD",

        motivation:
            "TBD",

        quote:
            "TBD",

    },


    {
        id: "advisor_agro",

        name: "Placeholder Name",

        institute: "Agronomy Institute",

        role: "Scientific Advisor",

        category: "research",

        image:
            "assets/people/agronomy.jpg",

        description:
            "Contributes domain expertise in agriculture, crop science, sustainability and food systems.",

        motivation:
            "Helping scientific tools create tangible benefits for food security and environmental sustainability.",

        quote:
            "The future of agriculture depends on our ability to learn faster than the challenges we face.",

    },

    {
        id: "advisor_med",

        name: "Placeholder Name",

        institute: "Medical Institute",

        role: "Scientific Advisor",

        category: "research",

        image:
            "assets/people/medical.jpg",

        description:
            "Supports the development of Scientist AI in clinical trials, experimental design and evidence-based medicine.",

        motivation:
            "Improving how knowledge is generated and translated into better healthcare.",

        quote:
            "Good experiments save years of uncertainty.",
    },

    {
        id: "architect",

        name: "Placeholder Name",

        institute: "Scientist AI",

        role: "Lead Architect",

        category: "engineering",

        image:
            "assets/people/architect.jpg",

        description:
            "Designs the overall architecture of the Scientist AI platform and ensures coherence across systems.",

        motivation:
            "Turning ambitious scientific ideas into robust and scalable infrastructures.",

        quote:
            "Architecture is where long-term vision becomes executable reality.",

    },


    
    {
        id: "toolkit_dev",

        name: "Placeholder Name",

        institute: "Scientist AI",

        role: "Toolkit Developer",

        category: "engineering",

        image:
            "assets/people/toolkit_dev.jpg",

        description:
            "Develops the core toolkit that enables scientists to build, test and deploy autonomous scientific agents.",

        motivation:
            "Ensuring that the Scientist AI toolkit is powerful, flexible and user-friendly.",

        quote:
            "The best tools are the ones that disappear into the workflow, letting scientists focus on discovery rather than implementation.",

    },


    
    {
        id: "toolkit_algorithm_integration",

        name: "Placeholder Name",

        institute: "Scientist AI",

        role: "Algorithm Integrator",

        category: "engineering",

        image:
            "assets/people/algorithm_integration.jpg",

        description:
            "Integrates advanced algorithms into the Scientist AI toolkit, ensuring seamless operation and performance.",

        motivation:
            "Bridging the gap between cutting-edge research and practical application in scientific workflows.",

        quote:
            "The most elegant algorithms are those that empower scientists to explore new frontiers without friction.",

    },


    {
        id: "uiux",

        name: "Placeholder Name",

        institute: "Scientist AI",

        role: "UX/UI Designer",

        category: "education",

        image:
            "assets/people/designer.jpg",

        description:
            "Designs intuitive and engaging interfaces that make scientific reasoning accessible and understandable.",

        motivation:
            "Ensuring that advanced science remains approachable to everyone.",

        quote:
            "People do not fall in love with algorithms. They fall in love with understanding.",

    },

    {
        id: "ethics",

        name: "Placeholder Name",

        institute: "Scientist AI",

        role: "Ethics Lead",

        category: "ethics",

        image:
            "assets/people/ethics.jpg",

        description:
            "Oversees ethical architecture, AI governance, compliance and knowledge equity initiatives.",

        motivation:
            "Making sure scientific capability evolves together with responsibility.",

        quote:
            "Powerful knowledge must be accompanied by equally powerful safeguards.",

    },

    {
        id: "communication",

        name: "Placeholder Name",

        institute: "Scientist AI",

        role: "Science Communication Lead",

        category: "communication",

        image:
            "assets/people/comms.jpg",

        description:
            "Transforms scientific advances into stories, interviews, educational materials and public-facing media.",

        motivation:
            "Helping scientific discoveries reach everyone, especially younger generations.",

        quote:
            "Knowledge only changes the world when it is shared.",

        quoteAuthor:
            "Science Communication Lead"
    },


    
    {
        id: "comtech",

        name: "ComTech Alliance",

        institute: "ComTech Alliance, Tanzania",

        role: "Partner",

        category: "partner",

        image:
            "assets/people/ComTech.jpg",

        description:
            "TBD",

        motivation:
            "TBD",

        quote:
            "TBD",
    },

    {
        id: "pm",

        name: "Placeholder Name",

        institute: "Scientist AI",

        role: "Project Manager",

        category: "operations",

        image:
            "assets/people/pm.jpg",

        description:
            "Coordinates activities, reporting, planning and execution across all teams.",

        motivation:
            "Enabling brilliant people to collaborate effectively.",

        quote:
            "Ambitious missions require both inspiration and organization.",

    }

];


/* ==========================================================
   DOM REFERENCES
   ========================================================== */

const memberGrid =
    document.getElementById("member-grid");

const showcasePhoto =
    document.getElementById("showcase-photo");

const showcaseName =
    document.getElementById("showcase-name");

const showcaseInstitute =
    document.getElementById("showcase-institute");

const showcaseRole =
    document.getElementById("showcase-role");

const showcaseDescription =
    document.getElementById("showcase-description");

const showcaseMotivation =
    document.getElementById("showcase-motivation");

const showcaseQuote =
    document.getElementById("showcase-quote");

const showcaseAuthor =
    document.getElementById("showcase-author");


/* ==========================================================
   UTILITIES
   ========================================================== */

function shuffle(array) {

    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [copy[i], copy[j]] =
            [copy[j], copy[i]];
    }

    return copy;
}


/* ==========================================================
   UPDATE SHOWCASE
   ========================================================== */

function updateShowcase(member) {

    showcasePhoto.src =
        member.image;

    showcasePhoto.alt =
        member.name;

    showcaseName.textContent =
        member.name;

    showcaseInstitute.textContent =
        member.institute;

    showcaseRole.textContent =
        member.role;

    showcaseDescription.textContent =
        member.description;

    showcaseMotivation.textContent =
        member.motivation;

    showcaseQuote.textContent =
        `"${member.quote}"`;

    showcaseAuthor.textContent =
        `— ${member.name}`;

    document
        .querySelector(".showcase")
        .classList.remove("fade-in");

    void document
        .querySelector(".showcase")
        .offsetWidth;

    document
        .querySelector(".showcase")
        .classList.add("fade-in");
}


/* ==========================================================
   CARD CREATION
   ========================================================== */

function createMemberCard(member) {

    const card =
        document.createElement("div");

    card.className =
        `member-card role-${member.category}`;

    card.innerHTML = `

        <img
            class="member-thumb"
            src="${member.image}"
            alt="${member.name}">

        <div class="member-name">
            ${member.name}
        </div>

        <div class="member-institute">
            ${member.institute}
        </div>

        <div class="member-role">
            ${member.role}
        </div>
    `;

    card.addEventListener(
        "mouseenter",
        () => {

            document
                .querySelectorAll(".member-card")
                .forEach(el =>
                    el.classList.remove("active")
                );

            card.classList.add("active");

            updateShowcase(member);
        }
    );

    card.addEventListener(
        "click",
        () => {

            document
                .querySelectorAll(".member-card")
                .forEach(el =>
                    el.classList.remove("active")
                );

            card.classList.add("active");

            updateShowcase(member);
        }
    );

    return card;
}


/* ==========================================================
   INITIALIZATION
   ========================================================== */

function initializeTeamPage() {

    const shuffled =
        shuffle(members);

    shuffled.forEach(member => {

        const card =
            createMemberCard(member);

        memberGrid.appendChild(card);
    });

    if (members.length > 0) {

        updateShowcase(members[0]);
    }
}

initializeTeamPage();