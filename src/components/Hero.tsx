import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { scrollToElement } from "../utils/scrollUtils";
import { useState, useEffect } from "react";

const Hero = () => {
  const handleScrollToSection = (id: string) => {
    scrollToElement(id);
  };

  // Typing effect state with loop functionality
  const [text, setText] = useState("");
  const fullText = "Software Engineer | Blockchain Enthusiast | Coffee Abuser";
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80); // Base typing speed

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Typing logic
      if (!isDeleting && index < fullText.length) {
        setText(fullText.substring(0, index + 1));
        setIndex(index + 1);
        setTypingSpeed(80); // Normal typing speed
      } 
      // Pause at the end before deleting
      else if (!isDeleting && index === fullText.length) {
        setTypingSpeed(2000); // Pause before deleting
        setIsDeleting(true);
      } 
      // Deleting logic
      else if (isDeleting && index > 0) {
        setText(fullText.substring(0, index - 1));
        setIndex(index - 1);
        setTypingSpeed(40); // Faster when deleting
      } 
      // Reset after deleting
      else if (isDeleting && index === 0) {
        setIsDeleting(false);
        setTypingSpeed(500); // Pause before typing again
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullText, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background elements - slower animations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-background/0 dark:from-primary/10 dark:to-background/0"></div>
        
        {/* Animated blobs - slower animations */}
        <div className="absolute top-1/4 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl animate-blob-slow animation-delay-2000"></div>
        <div className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl animate-blob-slow"></div>
        <div className="absolute top-2/3 left-1/2 h-40 w-40 rounded-full bg-secondary/10 blur-3xl animate-blob-slow animation-delay-4000"></div>
        
        {/* Subtle floating particles - slower animations */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-primary/20 animate-float-slow"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 30}s`, // Much slower
                animationDelay: `${Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="animate-fade-in text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-text-gradient-slow">Anuraag</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl animate-fade-in opacity-0 animation-delay-200 h-8">
              <span className="inline-block">{text}</span>
              <span className="inline-block animate-pulse ml-1">|</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0 animation-delay-300">
            <Button 
              size="lg" 
              className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-subtle"
              onClick={() => handleScrollToSection("contact")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full shadow-sm hover:shadow-md transition-all duration-300 group"
              onClick={() => handleScrollToSection("projects")}
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>
          
          {/* Social links with subtle animations */}
          <div className="flex items-center gap-4 mt-4 animate-fade-in opacity-0 animation-delay-500">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary animate-bounce-subtle animation-delay-1200" asChild>
              <a href="https://github.com/AnuraagChetia" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary animate-bounce-subtle animation-delay-1400" asChild>
              <a href="https://www.linkedin.com/in/anuraag-chetia-36400017b/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary animate-bounce-subtle animation-delay-1600" asChild>
              <a href="mailto:anuraagchetia77@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator - positioned relative to the hero section */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => handleScrollToSection("about")} 
          className="rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-all duration-300"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
