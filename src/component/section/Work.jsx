import React from "react";

// Real projects only. Leave a field out rather than inventing a claim.
const PROJECTS = [
    {
        title: "FamilyStore — Convenience Store Web & Order Portal",
        category: "Interactive Demo / Web App",
        oneliner: "Omnichannel web platform featuring real-time store locator, ready-to-eat menu catalog, and fast self-pickup ordering system.",
        problem: "Traditional convenience stores face long checkout queues and lack a modern digital showcase for fresh ready-to-eat products.",
        solution: "Built a mobile-first React application with dynamic store status, interactive catalog with category filters, and an express pickup ordering flow.",
        impact: "Streamlined ready-to-eat discovery, demonstrated 0-queue pickup workflow, and created a cohesive retail design system.",
        liveUrl: "https://nongslab-retail-store.vercel.app/",
        tags: ["React 19", "Tailwind CSS", "Lucide Icons", "Store Locator"],
    },
    {
        title: "Jahaplast",
        category: "E-Commerce / Industrial Web",
        oneliner: "Company website and e-commerce platform for industrial piping and mining equipment.",
        problem: "Manual order inquiries and lack of digital product visibility slowed down business B2B sales and customer reach.",
        solution: "Designed and built a responsive WordPress & WooCommerce catalog platform with clear category navigation and direct inquiry integration.",
        impact: "Enhanced brand credibility, streamlined industrial product discovery, and expanded digital customer inquiries.",
        liveUrl: "https://jahaplast.com",
        tags: ["WordPress", "WooCommerce", "Elementor", "SEO"],
    },
    {
        title: "WeddiN",
        category: "Nongslab Sub-Brand / SaaS",
        oneliner: "Digital wedding invitation platform, built and run as an in-house Nongslab product line.",
        problem: "Traditional paper invitations lack interactive RSVP tracking, location maps, and instant digital distribution.",
        solution: "Developed a customizable digital invitation engine with interactive RSVPs, music players, and seamless WhatsApp share flows.",
        impact: "Successfully launched as an active product line, enabling instant invitation creation with high engagement.",
        liveUrl: "https://wedding.nongslab.com",
        tags: ["React", "UI/UX Design", "Custom Animations", "Sub-Brand"],
    },
];

const Work = () => {
    return (
        <section id="work" className="scroll-mt-16 bg-[#FFF6F0] py-12 md:py-20">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-primary text-body font-medium font-sans mb-2">
                    Selected Work
                </h2>
                <h3 className="text-neutral-950 text-h5 lg:text-h4 font-bold leading-tight font-sans mb-8 max-w-2xl">
                    Projects we have designed and built
                </h3>

                <div className="flex flex-col divide-y divide-gray-200">
                    {PROJECTS.map((project) => (
                        <article key={project.title} className="py-8">
                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-10">
                                <div className="shrink-0 md:w-64">
                                    <h4 className="text-h5 md:text-h4 font-bold text-neutral-950 font-sans">
                                        {project.title}
                                    </h4>
                                    {project.category && (
                                        <p className="font-mono text-caption text-gray-500 tracking-wide mt-1">
                                            {project.category}
                                        </p>
                                    )}
                                </div>
                                {project.problem && project.solution && project.impact ? (
                                    <div>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div>
                                                <h5 className="font-mono text-caption font-semibold text-primary uppercase tracking-wide mb-2">Problem</h5>
                                                <p className="text-gray-600 text-base leading-relaxed">{project.problem}</p>
                                            </div>
                                            <div>
                                                <h5 className="font-mono text-caption font-semibold text-primary uppercase tracking-wide mb-2">Solution</h5>
                                                <p className="text-gray-600 text-base leading-relaxed">{project.solution}</p>
                                            </div>
                                            <div>
                                                <h5 className="font-mono text-caption font-semibold text-primary uppercase tracking-wide mb-2">Impact</h5>
                                                <p className="text-gray-600 text-base leading-relaxed">{project.impact}</p>
                                            </div>
                                        </div>
                                        {project.oneliner && (
                                            <p className="text-gray-700 text-light leading-relaxed mt-6 font-sans max-w-2xl">
                                                {project.oneliner}
                                            </p>
                                        )}
                                        {project.tags && (
                                            <ul className="flex flex-wrap gap-2 mt-4" aria-label="Tech stack">
                                                {project.tags.map((tag) => (
                                                    <li key={tag} className="font-mono text-caption text-primary bg-primary/10 px-2.5 py-1 rounded">
                                                        {tag}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 mt-5 font-sans text-body font-semibold text-primary hover:text-primary/80 underline underline-offset-4 decoration-2 min-h-[44px]"
                                            >
                                                Live Demo <span aria-hidden="true">&#8594;</span>
                                            </a>
                                        )}
                                    </div>
                                ) : null}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
