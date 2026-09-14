import { Button } from '@/components/Button';
import {
  ArrowRight,
  ChevronDown,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
    "React",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "Vercel",
    "Python",
    "Java",
    "Javascript",
];

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.68.42.36.78 1.08.78 2.17v3.22c0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z"/>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
  </svg>
);

export const Hero = () => {
    return <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
            <img src="/hero-bg.jpg" alt="Hero image" className="w-full h-full object-cover opacity-40"/>   
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(50)].map((_, i) => (
                <div className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
                style={{backgroundColor: "#20B2A6",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                }}
            />
            ))}
        </div>

        {/* Content */}

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Computer Science Student & Software Developer
                        </span>
                    </div>
                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Designing simple, <span className="text-primary glow-text">digital </span>
                            solutions to <span className="font-serif italic font-normal text-white">complex </span> 
                            problems
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            Hi, I’m George Li, a Computer Science student interested in software development, 
                            problem-solving and creating technology that makes an impact. 
                            I’m always looking for opportunities to learn, experiment and build something new.
                        </p>
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg">
                            Contact Me <ArrowRight className='w-5 h-5'/>
                        </Button>
                        <AnimatedBorderButton>
                            <span className='z-10 flex items-center justify-center gap-2'>
                                <Download className='w-5 h-5'/>
                                Download CV
                            </span>
                        </AnimatedBorderButton>
                    </div>
                    {/* Socials */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foregrond">Follow me: </span>
                        {[
                            { icon: GithubIcon, href: "https://github.com/vermoshrank" },
                            { icon: LinkedinIcon, href: "#"},
                        ].map((social, idx) => (
                            <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                {<social.icon className="w-5 h-5"/>}
                            </a>
                        ))}
                    </div>
                </div>
                {/* Right Column */}
                <div>
                    {/* Pfp (add later) */}
                    <div>
                        <div>
                            {/* Image goes here */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Technologies */}
            <div className='mt-20 animate-fade-in animation-delay-600'>
                <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies</p>
                <div className='relative overflow-hidden'>
                    <div className='flex animate-marquee'>
                        {[...skills, ...skills].map((skill, i) => (
                            <div key={i} className='flex-shrink-0 px-8 py-4'>
                                <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div>
    </section>;
}