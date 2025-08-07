import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        "HTML",
        "JavaScript",
        "CSS",
        "React", 
        "Vite",  
        "TailwindCSS",
    ];
    const backendSkills = [
        "Python",
        "Java",
        "C",
        "Django",
        "REST API",
        "Daphne",
        "IIS Manager",
    ];

    return(
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        I am current student at Marquette University studying Computer Science. 
                        I believe in lifelong learning, and strive to learn something new every day.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                    {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                    {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Education</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        <strong>B.S. in Computer Science</strong> - Marquette University (2022-2026)
                                    </li>
                                    <li>
                                        <strong>Relevant Coursework</strong> Data Structures, Operating Systems, Software Design & Analysis
                                    </li>
                                </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                                <div className="space-y-4 text-gray-300">
                                    <div>
                                        <h4 className="font-semibold">Intern at Johnson Controls (2025-Present)</h4>
                                        <p>
                                            <li>
                                                Designed a lightweight software tool for tracking lab machines, improving data collection and monitoring capabilities
                                            </li>
                                            <li>   
                                                Created automation scripts to automate internal processes
                                            </li>
                                            <li>
                                                Developed an AI-powered search assistant to enhance information retrieval efficiency
                                            </li>
                                        </p>
                                    </div>
                                </div>
                    </div>

                </div>
            </div>
            </RevealOnScroll>
        </section>
    ); 
}