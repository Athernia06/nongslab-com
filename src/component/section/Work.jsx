import React from "react";

// Real projects only. problem/solution/impact are optional: fill them with
// real case-study detail and the row renders as a full three-column layout,
// otherwise the entry ships as a compact line. Leave a field out rather than
// inventing a claim.
const PROJECTS = [
    {
        title: "Jahaplast",
        desc: "Company website and e-commerce platform for industrial piping and equipment.",
    },
    {
        title: "WeddiN",
        desc: "Digital wedding invitation platform, built and run as a Nongslab sub-brand.",
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
                                <h4 className="text-h5 md:text-h4 font-bold text-neutral-950 font-sans shrink-0 md:w-64">
                                    {project.title}
                                </h4>
                                {project.problem && project.solution && project.impact ? (
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
                                ) : (
                                    <p className="text-gray-600 text-base leading-relaxed">
                                        {project.desc}
                                    </p>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
