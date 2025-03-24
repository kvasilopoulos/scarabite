const servicesData = {
    hero: {
        title: "Services",
        description: "We design and optimize automated workflows to collect, process, and analyze data efficiently and at scale."
    },
    services: [
        {
            title: "Advanced AI Systems",
            description: "We develop AI-driven systems that generate text, images, and insights to enhance creativity, automation, and decision-making.",
            image: "resources/img/content/service-genai.jpg",
            features: [
                "Enterprise LLM Integration",
                "Autonomous AI Agents",
                "Multi-agent Orchestration",
                "AI Tool Development",
                "Cognitive Architecture Design"
            ],
            icon: "fas fa-robot"
        },
        {
            title: "Language Intelligence",
            description: "We enable machines to understand, interpret, and generate human language for automation and intelligence.",
            image: "resources/img/content/service-nlp.png",
            features: [
                "RAG & Knowledge Systems",
                "Semantic Search & Analysis",
                "Document Understanding",
                "Conversational Systems",
                "Cross-lingual Processing"
            ],
            icon: "fas fa-language"
        },
        {
            title: "Data Extraction",
            description: "We extract and structure data from websites, APIs, internal and external sources and databases for analysis, automation, and business intelligence.",
            image: "resources/img/content/service-webcrawling.jpg",
            features: [
                "Intelligent web scraping",
                "Structured data pipeline",
                "Advanced proxy solutions",
                "Real-time monitoring",
                "Ethical data collection"
            ],
            icon: "fas fa-spider"
        },
        {
            title: "Data Pipeline Automation",
            description: "We design and optimize automated workflows to collect, process, and analyze data efficiently and at scale.",
            image: "resources/img/content/service-datapipeline.png",
            features: [
                "Automated ETL workflows",
                "Data integration & validation",
                "Performance optimization",
                "Real-time processing",
                "Scalable architecture"
            ],
            icon: "fas fa-project-diagram"
        },
        {
            title: "Software Development",
            description: "We create tailored, high-performance software solutions designed to integrate seamlessly with business workflows.",
            image: "resources/img/content/service-softwaredev.png",
            features: [
                "Full-stack solutions",
                "Cloud-native applications",
                "API development",
                "DevOps automation",
                "Continuous deployment"
            ],
            icon: "fas fa-code"
        },
        {
            title: "AWS Cloud Services",
            description: "We build and optimize AWS-based infrastructures for security, scalability, and performance.",
            image: "resources/img/content/service-cloud.png",
            features: [
                "Infrastructure design",
                "Serverless architecture",
                "Security & compliance",
                "Cost optimization",
                "24/7 monitoring"
            ],
            icon: "fas fa-cloud"
        }
    ]
};

// Function to generate service HTML for services.html
function generateServiceHTML(service, isAlternate = false) {
    const contentCol = `
        <div class="offset-md-1 col-md-5">
            <div class="service-content">
                <div class="service-title">
                    <h2>${service.title}</h2>
                </div>
                <div class="service-description">
                    <p>${service.description}</p>
                </div>
                <ul class="service-features">
                    ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        </div>`;

    const imageCol = `
        <div class="col-md-6">
            <div class="service-visual">
                <img src="${service.image}" alt="${service.title}" class="service-image">
            </div>
        </div>`;

    return `
        <div class="row">
            ${isAlternate ? imageCol + contentCol : contentCol + imageCol}
        </div>`;
}

// Function to generate service cards HTML for index.html
function generateServiceCardsHTML(service) {
    return `
        <div class="col-md-4">
            <div class="service-card">
                <div class="service-icon">
                    <i class="${service.icon}"></i>
                </div>
                <h3>${service.title}</h3>
                <ul class="service-list">
                    ${service.features.slice(0, 5).map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        </div>`;
}

// Function to populate services section in services.html
function populateServices(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Add hero section if it exists
    const heroSection = container.querySelector('.service-hero');
    if (heroSection) {
        const heroTitle = heroSection.querySelector('.service-hero-title');
        const heroDesc = heroSection.querySelector('.service-hero-description');
        if (heroTitle) heroTitle.textContent = servicesData.hero.title;
        if (heroDesc) heroDesc.textContent = servicesData.hero.description;
    }

    // Add services
    const servicesContainer = container.querySelector('.service-section .container');
    if (servicesContainer) {
        servicesContainer.innerHTML = servicesData.services
            .map((service, index) => generateServiceHTML(service, index % 2 !== 0))
            .join('');
    }
}

// Function to populate service cards in index.html
function populateServiceCards(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const servicesRow = container.querySelector('.row.g-4');
    if (servicesRow) {
        servicesRow.innerHTML = servicesData.services
            .map(service => generateServiceCardsHTML(service))
            .join('');
    }
} 