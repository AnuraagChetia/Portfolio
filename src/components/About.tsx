import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import LazyLoad from "./LazyLoad";

const About = () => {
  return (
    <section
      id="about"
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-fade-in">
              About Me
            </h2>
          </LazyLoad>
          <LazyLoad animation="zoom-in" delay={300}>
            <Separator className="w-24 mx-auto my-2 animate-scale-in opacity-0 animation-delay-200" />
          </LazyLoad>
          <LazyLoad animation="fade-up" delay={400}>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in opacity-0 animation-delay-300">
              Get to know me better
            </p>
          </LazyLoad>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12">
          <LazyLoad animation="fade-right" delay={500}>
            <div className="flex flex-col justify-center space-y-4 animate-slide-in-left opacity-0 animation-delay-400">
              <div className="flex items-center justify-center lg:justify-start">
                <Avatar className="h-48 w-48 border-4 border-background shadow-xl animate-float">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1529946825183-536c6317f60e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Profile Picture"
                  />
                  <AvatarFallback className="text-4xl">YN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </LazyLoad>
          <LazyLoad animation="fade-left" delay={600}>
            <div className="flex flex-col justify-center space-y-4 animate-slide-in-right opacity-0 animation-delay-500">
              <Card className="bg-card/60 backdrop-blur-sm border-primary/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Who am I?</CardTitle>
                  <CardDescription className="text-base">
                    A hardworking Software Engineer with a vision to build a
                    decentralized future.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <LazyLoad animation="fade-up" delay={700}>
                    <p className="text-muted-foreground">
                      I'm a Software Engineer with a passion for building
                      scalable and efficient web applications. With expertise in
                      both frontend and backend development, I specialize in
                      modern tech stacks including React, Node.js and other Web2
                      tech stacks along with cutting edge Web3 technologies like
                      developing smart contracts using Solidty and more. I am a
                      strong believer in Decentralized Finance (DeFi) and thrive
                      to contribute to the community in order to build a
                      Decentralized future.
                    </p>
                  </LazyLoad>
                  <LazyLoad animation="fade-up" delay={800}>
                    <p className="text-muted-foreground">
                      When I'm not coding, you can find me exploring new
                      technologies, or hanging out with my friends ( that's the
                      best stress reliever 😊 ). Oh and I also love reading
                      Manga.
                    </p>
                  </LazyLoad>
                </CardContent>
              </Card>
            </div>
          </LazyLoad>
        </div>
      </div>
    </section>
  );
};

export default About;
