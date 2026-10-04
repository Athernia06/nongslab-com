import React, { useState } from "react";
import { BiMessageDetail } from "react-icons/bi";

const EMAIL = "nlabs.asia@gmail.com";

const projectTypes = [
    "Website / Web App",
    "UI/UX Design",
    "Digital Workflow Optimization",
    "Something else",
];

const emptyForm = { name: "", email: "", type: projectTypes[0], message: "" };

const Contact = () => {
    const [form, setForm] = useState(emptyForm);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const update = (field) => (e) => {
        setForm({ ...form, [field]: e.target.value });
        if (errors[field]) setErrors({ ...errors, [field]: undefined });
    };

    const validate = () => {
        const next = {};
        if (!form.name.trim()) next.name = "Please enter your name.";
        if (!form.email.trim()) next.email = "Please enter your email.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "That email does not look right.";
        if (!form.message.trim()) next.message = "Tell us a little about the project.";
        return next;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const next = validate();
        setErrors(next);
        if (Object.keys(next).length > 0) return;

        const subject = encodeURIComponent(`Project inquiry: ${form.type}`);
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.type}\n\n${form.message}`
        );
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    return (
        <section id="contact" className="scroll-mt-16 bg-white py-12 md:py-20">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16">
                    {/* Left: intro + direct contact */}
                    <div>
                        <h2 className="text-primary text-body font-medium font-sans mb-2">
                            Contact
                        </h2>
                        <h3 className="text-neutral-950 text-h5 lg:text-h4 font-bold leading-tight font-sans mb-4">
                            Tell us about your project
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-md">
                            Send the form and your email app opens with the message ready. We reply to every inquiry ourselves.
                        </p>
                        <a
                            href={`mailto:${EMAIL}`}
                            className="inline-flex items-center gap-2 text-primary font-medium font-sans min-h-[44px] hover:text-orange-600 transition-colors"
                        >
                            <BiMessageDetail className="text-xl" />
                            {EMAIL}
                        </a>
                    </div>

                    {/* Right: inquiry form */}
                    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="contact-name" className="block text-caption font-medium text-gray-700 mb-1.5">
                                    Your name
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    value={form.name}
                                    onChange={update("name")}
                                    placeholder="Your name"
                                    className={`w-full rounded-xl border-2 px-4 py-3 text-base font-sans outline-none focus:border-primary transition-colors ${errors.name ? "border-red-500" : "border-gray-200"}`}
                                />
                                {errors.name && <p className="text-caption text-red-600 mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="block text-caption font-medium text-gray-700 mb-1.5">
                                    Email
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    value={form.email}
                                    onChange={update("email")}
                                    placeholder="email@example.com"
                                    className={`w-full rounded-xl border-2 px-4 py-3 text-base font-sans outline-none focus:border-primary transition-colors ${errors.email ? "border-red-500" : "border-gray-200"}`}
                                />
                                {errors.email && <p className="text-caption text-red-600 mt-1">{errors.email}</p>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="contact-type" className="block text-caption font-medium text-gray-700 mb-1.5">
                                Project type
                            </label>
                            <select
                                id="contact-type"
                                value={form.type}
                                onChange={update("type")}
                                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-base font-sans outline-none focus:border-primary transition-colors bg-white min-h-[44px]"
                            >
                                {projectTypes.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="contact-message" className="block text-caption font-medium text-gray-700 mb-1.5">
                                Project details
                            </label>
                            <textarea
                                id="contact-message"
                                rows={5}
                                value={form.message}
                                onChange={update("message")}
                                placeholder="What are you building, and what does success look like?"
                                className={`w-full rounded-xl border-2 px-4 py-3 text-base font-sans outline-none focus:border-primary transition-colors resize-y ${errors.message ? "border-red-500" : "border-gray-200"}`}
                            />
                            {errors.message && <p className="text-caption text-red-600 mt-1">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="self-start bg-[#F08733] text-white px-8 py-3.5 rounded-full hover:bg-orange-600 transition-colors duration-300 font-sans font-medium text-lg min-h-[44px]"
                        >
                            Send Inquiry
                        </button>

                        {submitted && (
                            <p className="text-caption text-gray-700 bg-[#FFF3EC] rounded-xl px-4 py-3" role="status">
                                Your email app should open with the message ready. If it did not, write to us directly at {EMAIL}.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
