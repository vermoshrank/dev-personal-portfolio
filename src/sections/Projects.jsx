import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
    {
        title: "Workout Split Generator",
        description: "A Java-based workout split planner that allows users to generate, create, customize, save, and load workout plans tailored to their training goals.",
        image: "/projects/project1.png",
        tags: ["Java", "Java Swing"],
        link: "#",
        github: "https://github.com/vermoshrank/Workout-Split-Generator"
    },
    {
        title: "Backrooms: Choice Based Adventure Game",
        description: "A Python/Pygame-based Backrooms horror adventure featuring branching choices, multiple endings, hostile entities, survival mechanics, and atmospheric liminal environments.",
        image: "/projects/project2.jpg",
        tags: ["Python", "Pygame"],
        link: "#",
        github: "https://github.com/vermoshrank/backrooms-pygame"
    },
]

const GithubIcon = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.68.42.36.78 1.08.78 2.17v3.22c0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
  </svg>
);

export const Projects = () => {
    return (
    <section id="projects" className="py-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Recent projects
                    <span className="font-serif font-normal text-white"> I've made.</span>
                </h2>

            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, i) => (
                    <div key={i} 
                    className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                    style={{animationDelay: `${(i + 1)* 100}ms`}}>
                        <div className="relative overflow-hidden aspect-video">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                            <div
                                className="absolute inset-0 
                                bg-gradient-to-t from-card via-card/50
                                to-transparent opacity-60"
                            />
                            {/* Links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {/* 
                                <a href={project.link}
                                   className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                >
                                    <ArrowUpRight className="w-5 h-5"/>
                                </a>
                                */}
                                
                                <a href={project.github}
                                   className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <GithubIcon />
                                </a>
                            </div>
                        </div>

                        {/* Project Descriptions */}

                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
                            </div>
                            <p className="text-muted-foreground text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">{project.tags.map((tag, tagIdx) => (
                                <span key={tagIdx}
                                 className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                            ))}</div>
                        </div>

                    </div>
                ))}
            </div>

            {/* View All Button */} 
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
                <AnimatedBorderButton>
                    <a href="https://github.com/vermoshrank">View All Projects</a>
                    <ArrowUpRight className="w-5 h-5" />
                </AnimatedBorderButton>
            </div>
        </div>
    </section>
    );
}