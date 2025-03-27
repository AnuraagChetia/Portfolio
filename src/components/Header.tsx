import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { scrollToElement } from "../utils/scrollUtils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    scrollToElement(id);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
        <div className="font-bold text-xl cursor-default">Anuraag.eth</div>
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#about"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => handleNavClick(e, "about")}
          >
            About
          </a>
          <a
            href="#skills"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => handleNavClick(e, "skills")}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => handleNavClick(e, "projects")}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Contact
          </a>
          <a
            href="https://drive.google.com/file/d/1KPup_8qNWB8B8ox1IXehybiFf6uBeAmH/view?usp=sharing"
            target="_blank"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Resume
          </a>
          <ThemeToggle />
        </nav>
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(true)}
            className="cursor-pointer"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg bg-background/95 backdrop-blur-sm md:hidden">
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="font-bold text-xl">Anuraag.eth</div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="container flex flex-col items-center justify-center gap-6 p-4 h-[calc(100vh-4rem)] bg-black">
            <a
              href="#about"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, "about")}
            >
              About
            </a>
            <a
              href="#skills"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, "skills")}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, "projects")}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
