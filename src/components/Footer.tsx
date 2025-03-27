import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { scrollToElement } from "../utils/scrollUtils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    scrollToElement(id);
  };

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full flex justify-center">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="font-bold text-xl">Portfolio</div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {currentYear} Anuraag. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <nav className="flex items-center gap-4 text-sm">
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => handleNavClick(e, "about")}
              >
                About
              </a>
              <a
                href="#skills"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => handleNavClick(e, "skills")}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => handleNavClick(e, "projects")}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href="https://github.com/AnuraagChetia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href="https://x.com/AnuraagChetia04"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/anuraag-chetia-36400017b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              {/* <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button> */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
