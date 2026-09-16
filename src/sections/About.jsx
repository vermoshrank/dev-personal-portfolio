import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I write clear and organized code that is easy to understand.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "I strive for efficient solutions that perform reliably without unnecessary complexity.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "I value teamwork, communication and learning from others to be able to build better together.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "I enjoy exploring new ideas and technologies to find solutions to challenging problems.",
  },
];


export const About = () => {
    return <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            {/* Left */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        A Little 
                        <span className="font-serif italic font-normal text-white"> About Me</span>
                    </h2>

                    <div className="text-lg space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>I’m a Computer Science student who enjoys coding, learning new technologies and making projects out of ideas.
                             I’m still early in my journey as a developer, but I’m always looking for opportunities to challenge myself and improve.
                              Here, you’ll find some of the projects I’ve built and the things I’ve learned along the way.</p>
                    </div>

                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            My mission is to continuously learn, build and challenge myself through computer science.
                             I strive to turn ideas into meaningful projects, solve problems creatively,
                              and develop the skills needed to create technology that is useful and impactful.
                        </p>
                    </div>

                </div>

                {/* Right Side */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, i) => (
                        <div key={i} className="glass p-6 rounded-2xl group animate-fade-in"
                        style={{animationDelay: `${(i + 1)* 100}ms`}}>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    </section>;
}