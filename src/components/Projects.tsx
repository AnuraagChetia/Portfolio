import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import LazyLoad from "./LazyLoad";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage = ({ src, alt, className = "" }: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4="
  ); // Placeholder
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className} transition-all duration-500 ${
        isLoaded ? "blur-0 scale-100" : "blur-sm scale-105"
      }`}
    />
  );
};

const projects = [
  {
    title: "Learning Management System",
    description:
      "A learning management system for managing courses, assignments, and student progress.",
    image:
      "https://images.unsplash.com/photo-1573706376056-55f27105ff17?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: [
      "React",
      "Node.js",
      "Express",
      "Mongoose",
      "MongoDB",
      "Razorpay",
      "Chakra UI",
    ],
    demoLink: "https://lms.brandon.co.in/",
    codeLink:
      "https://github.com/AnuraagChetia/Learning-Management-System---LMS",
  },
  {
    title: "E-Commerce app backend",
    description:
      "A backend for an e-commerce app using ASP.Net Core, Entity Framework Core, and SQL Server.",
    image:
      "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["ASP.Net Core", "Entity Framework Core", "SQL Server"],
    demoLink: "https://github.com/AnuraagChetia/Dotnet-Ecommerce-Backend",
    codeLink: "https://github.com/AnuraagChetia/Dotnet-Ecommerce-Backend",
  },
  {
    title: "Raffle Smart Contract",
    description:
      "A smart contract for a raffle application using Solidity, Foundry, Chainlink, Openzeppelin and Ethereum.",
    image:
      "https://plus.unsplash.com/premium_photo-1718674394245-9f270c5fd2b3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Solidity", "Ethereum", "Chainlink", "Openzeppelin", "Web3"],
    demoLink: "https://github.com/AnuraagChetia/smart-lottery",
    codeLink: "https://github.com/AnuraagChetia/smart-lottery",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing skills, projects, and contact information with a modern design.",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    demoLink: "#",
    codeLink: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-16 md:py-24 bg-muted/30 dark:bg-muted/10 w-full flex justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10"></div>
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <LazyLoad animation="fade-up" delay={100}>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Projects
            </h2>
          </LazyLoad>
          <LazyLoad animation="zoom-in" delay={300}>
            <Separator className="w-24 mx-auto my-2" />
          </LazyLoad>
          <LazyLoad animation="fade-up" delay={400}>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent work
            </p>
          </LazyLoad>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <LazyLoad
              key={project.title}
              animation={index % 2 === 0 ? "fade-right" : "fade-left"}
              delay={500 + index * 100}
            >
              <Card className="overflow-hidden border border-primary/10 bg-card/60 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <LazyLoad animation="fade-up" delay={600 + index * 50}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                </LazyLoad>
                <LazyLoad animation="fade-up" delay={700 + index * 50}>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <LazyLoad
                          key={tag}
                          animation="zoom-in"
                          delay={800 + tagIndex * 50}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-secondary/10 hover:bg-secondary/20 transition-colors duration-300"
                          >
                            {tag}
                          </Badge>
                        </LazyLoad>
                      ))}
                    </div>
                  </CardContent>
                </LazyLoad>
                {/* <LazyLoad animation="fade-up" delay={800 + index * 50}> */}
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="gap-1" asChild>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="gap-1" asChild>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
                {/* </LazyLoad> */}
              </Card>
            </LazyLoad>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
