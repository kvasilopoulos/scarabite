class HeadContent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Get the current page path
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const baseUrl = 'https://scarabite.com';
        
        // Define page-specific meta descriptions in both languages for SEO
        const metaDescriptions = {
            'index.html': {
                en: 'Scarabite - Leading AI and data solutions provider. We specialize in Generative AI, NLP, web crawling, and custom software development for businesses across Europe and US.',
                el: 'Scarabite - Κορυφαίος πάροχος λύσεων AI και δεδομένων. Ειδικευόμαστε σε Generative AI, NLP, web crawling και ανάπτυξη εξατομικευμένου λογισμικού για επιχειρήσεις σε Ευρώπη και ΗΠΑ.'
            },
            'services.html': {
                en: 'AI Services - Generative AI, NLP, Web Crawling, Data Pipeline Automation, and Custom Software Development solutions by Scarabite.',
                el: 'Υπηρεσίες AI - Generative AI, NLP, Web Crawling, Αυτοματοποίηση Data Pipeline και λύσεις Ανάπτυξης Εξατομικευμένου Λογισμικού από τη Scarabite.'
            },
            'about.html': {
                en: 'About Scarabite - Empowering businesses through innovative AI solutions and data-driven insights across Europe and US.',
                el: 'Σχετικά με τη Scarabite - Ενδυναμώνουμε επιχειρήσεις μέσω καινοτόμων λύσεων AI και insights βασισμένων σε δεδομένα σε Ευρώπη και ΗΠΑ.'
            },
            'contact.html': {
                en: 'Contact Scarabite - Get in touch for AI and data solutions. Offices in Greece and US. Available in English and Greek.',
                el: 'Επικοινωνία με Scarabite - Επικοινωνήστε μαζί μας για λύσεις AI και δεδομένων. Γραφεία σε Ελλάδα και ΗΠΑ.'
            }
        };

        // Define keywords in both languages
        const keywords = {
            en: 'AI solutions, artificial intelligence, machine learning, data analytics, generative AI, NLP, web crawling, custom software, Greece, Europe, US',
            el: 'λύσεις AI, τεχνητή νοημοσύνη, μηχανική μάθηση, ανάλυση δεδομένων, Generative AI, NLP, web crawling, εξατομικευμένο λογισμικό, Ελλάδα, Ευρώπη, ΗΠΑ'
        };

        const currentMetaDesc = metaDescriptions[currentPath] || metaDescriptions['index.html'];
        
        document.head.innerHTML += `
            <!-- Essential Meta Tags -->
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            
            <!-- Primary Meta Tags -->
            <meta name="description" content="${currentMetaDesc.en}">
            <meta name="description" lang="el" content="${currentMetaDesc.el}">
            <meta name="keywords" content="${keywords.en}, ${keywords.el}">
            <meta name="author" content="Scarabite">
            <meta name="geo.region" content="GR">
            <meta name="geo.position" content="39.074208;21.824312">
            <meta name="ICBM" content="39.074208, 21.824312">
            
            <!-- Performance Optimizations -->
            <link rel="preconnect" href="https://cdn.jsdelivr.net">
            <link rel="preconnect" href="https://cdnjs.cloudflare.com">
            <link rel="preload" as="style" href="resources/css/main.css">
            <link rel="preload" as="script" href="components/header.js">
            <link rel="preload" as="script" href="components/footer.js">
            
            <!-- Open Graph / Facebook -->
            <meta property="og:type" content="website">
            <meta property="og:url" content="${baseUrl}/${currentPath}">
            <meta property="og:title" content="Scarabite | ${document.title || 'AI Solutions'}">
            <meta property="og:description" content="${currentMetaDesc.en}">
            <meta property="og:description:el" content="${currentMetaDesc.el}">
            <meta property="og:image" content="${baseUrl}/resources/img/logo2.png">
            <meta property="og:image:width" content="1200">
            <meta property="og:image:height" content="630">
            <meta property="og:site_name" content="Scarabite">
            <meta property="og:locale" content="en_US">
            <meta property="og:locale:alternate" content="el_GR">
            <meta property="og:updated_time" content="${new Date().toISOString()}">
            
            <!-- Twitter -->
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:url" content="${baseUrl}/${currentPath}">
            <meta name="twitter:title" content="Scarabite | ${document.title || 'AI Solutions'}">
            <meta name="twitter:description" content="${currentMetaDesc.en}">
            <meta name="twitter:image" content="${baseUrl}/resources/img/logo2.png">
            
            <!-- Language Alternates -->
            <link rel="alternate" hreflang="en" href="${baseUrl}/${currentPath}">
            <link rel="alternate" hreflang="el" href="${baseUrl}/el/${currentPath}">
            <link rel="canonical" href="${baseUrl}${currentPath === 'index.html' ? '/' : '/' + currentPath}">
            
            <!-- Favicon and Stylesheets -->
            <link rel="icon" href="resources/img/logo2.png" type="image/png">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" media="print" onload="this.media='all'">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" media="print" onload="this.media='all'">
            <link rel="stylesheet" href="resources/css/main.css">
            
            <!-- Social Media Integration -->
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            <script async src="https://platform.linkedin.com/badges/js/profile.js" type="text/javascript"></script>
            
            <!-- Schema.org Markup -->
            <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Scarabite",
                "url": "${baseUrl}",
                "logo": "${baseUrl}/resources/img/logo2.png",
                "description": {
                    "@language": "en",
                    "@value": "${currentMetaDesc.en}"
                },
                "description": {
                    "@language": "el",
                    "@value": "${currentMetaDesc.el}"
                },
                "address": [
                    {
                        "@type": "PostalAddress",
                        "addressCountry": "US",
                        "addressLocality": "Sheridan",
                        "addressRegion": "WY",
                        "postalCode": "82801",
                        "streetAddress": "30 N Gould St Ste R"
                    },
                    {
                        "@type": "PostalAddress",
                        "addressCountry": "GR",
                        "addressLocality": "Athens",
                        "addressRegion": "Attica"
                    }
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer support",
                    "email": "admin@scarabite.com",
                    "availableLanguage": ["English", "Greek"]
                },
                "areaServed": ["US", "GR", "EU"],
                "sameAs": [
                    "https://www.facebook.com/scarabite",
                    "https://twitter.com/scarabite",
                    "https://www.linkedin.com/company/scarabite"
                ],
                "offers": {
                    "@type": "AggregateOffer",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "name": "Generative AI Solutions",
                            "description": "AI-driven systems for text, images, and insights generation"
                        },
                        {
                            "@type": "Offer",
                            "name": "Natural Language Processing",
                            "description": "Machine learning solutions for language understanding and generation"
                        },
                        {
                            "@type": "Offer",
                            "name": "Web Crawling & Data Scraping",
                            "description": "Automated data extraction and structuring services"
                        },
                        {
                            "@type": "Offer",
                            "name": "Data Pipeline Automation",
                            "description": "Automated workflows for data collection and processing"
                        }
                    ]
                }
            }
            </script>
            
            <!-- DNS Prefetch -->
            <link rel="dns-prefetch" href="//cdn.jsdelivr.net">
            <link rel="dns-prefetch" href="//cdnjs.cloudflare.com">
            <link rel="dns-prefetch" href="//www.googletagmanager.com">
            
            <!-- Security Headers -->
            <meta http-equiv="Content-Security-Policy" content="default-src 'self' https: 'unsafe-inline' 'unsafe-eval'; img-src 'self' https: data:; font-src 'self' https: data:;">
            <meta http-equiv="X-Content-Type-Options" content="nosniff">
            <meta http-equiv="X-Frame-Options" content="SAMEORIGIN">
            <meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
        `;
    }
}

customElements.define('head-content', HeadContent); 