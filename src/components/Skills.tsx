import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Code, Lightbulb, Database, Globe } from "lucide-react";
import LazyLoad from "./LazyLoad";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: [
      "React",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Next.js",
      "Redux",
    ],
    description: "Building responsive and interactive user interfaces",
  },
  {
    title: "Backend",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "ASP.NET Core",
      "Mongoose",
      "Sequelize",
      "GraphQL",
    ],
    description: "Building robust server-side applications",
  },
  {
    title: "Deployment",
    icon: <Globe className="h-6 w-6 text-primary" />,
    skills: ["Vercel", "Netlify", "AWS", "Docker", "Firebase"],
    description: "Deploying applications to various platforms",
  },
  {
    title: "Other",
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    skills: [
      "Git",
      "GitHub",
      "Ethereum",
      "Solidity",
      "Foundry",
      "Web3",
      "OpenZeppelin",
      "Chainlink",
      "CI/CD",
    ],
    description: "Frameworks and tools I use in my projects",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-16 md:py-24 w-full flex justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <LazyLoad animation="fade-up" delay={100}>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-fade-in">
              Skills & Expertise
            </h2>
          </LazyLoad>
          <LazyLoad animation="zoom-in" delay={300}>
            <Separator className="w-24 mx-auto my-2 animate-scale-in opacity-0 animation-delay-200" />
          </LazyLoad>
          <LazyLoad animation="fade-up" delay={400}>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in opacity-0 animation-delay-300">
              Technologies and tools I work with
            </p>
          </LazyLoad>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <LazyLoad
              key={category.title}
              animation={index % 2 === 0 ? "fade-right" : "fade-left"}
              delay={500 + index * 100}
            >
              <Card
                className="overflow-hidden border border-primary/10 bg-card/60 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in opacity-0 min-h-[300px]"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <LazyLoad
                        key={skill}
                        animation="zoom-in"
                        delay={700 + index * 100}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-secondary/10 hover:bg-secondary/20 transition-colors duration-300"
                        >
                          {skill}
                        </Badge>
                      </LazyLoad>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </LazyLoad>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
