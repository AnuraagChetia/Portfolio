import type React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import LazyLoad from "./LazyLoad";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastState, setToastState] = useState<"idle" | "sending" | "sent">(
    "idle",
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setShowToast(true);
    setToastState("sending");

    // Simulate sending delay for UI-only experience
    setTimeout(() => {
      setToastState("sent");
      form.reset();

      // Hide toast after tick animation
      setTimeout(() => {
        setShowToast(false);
        setToastState("idle");
      }, 1200);
    }, 1400);
  };

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 w-full flex justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10"></div>
      </div>

      {showToast &&
        typeof window !== "undefined" &&
        createPortal(
          <div className="fixed top-20 right-4 z-50 px-4">
            <div className="flex items-center gap-3 rounded-2xl bg-card/95 px-4 py-3 shadow-lg border border-primary/20">
              <div className="relative flex h-9 w-9 items-center justify-center">
                {toastState === "sending" && (
                  <div className="h-9 w-9 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
                )}
                {toastState === "sent" && (
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white transition-all duration-300">
                    <Check className="h-5 w-5" />
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">
                  {toastState === "sending"
                    ? "Sending message..."
                    : "Message sent!"}
                </span>
                <span className="text-xs text-muted-foreground">
                  {toastState === "sending"
                    ? "Please wait while your message is being prepared."
                    : "I’ll get back to you as soon as I can."}
                </span>
              </div>
            </div>
          </div>,
          document.body,
        )}

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <LazyLoad animation="fade-up" delay={100}>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-fade-in">
              Get In Touch
            </h2>
          </LazyLoad>
          <LazyLoad animation="zoom-in" delay={300}>
            <Separator className="w-24 mx-auto my-2 animate-scale-in opacity-0 animation-delay-200" />
          </LazyLoad>
          <LazyLoad animation="fade-up" delay={400}>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in opacity-0 animation-delay-300">
              Have a question or want to work together?
            </p>
          </LazyLoad>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2 ">
          <LazyLoad animation="fade-right" delay={500}>
            <Card className="border border-primary/10 bg-card/60 backdrop-blur-sm shadow-md animate-slide-in-left opacity-0 animation-delay-400  F">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      anuraagchetia77@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-muted-foreground">
                      +91 9365631300
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      Bangalore, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </LazyLoad>

          <LazyLoad animation="fade-left" delay={600}>
            <Card className="border border-primary/10 bg-card/60 backdrop-blur-sm shadow-md animate-slide-in-right opacity-0 animation-delay-500">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <LazyLoad animation="fade-up" delay={700}>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Name
                        </label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>
                  </LazyLoad>
                  <LazyLoad animation="fade-up" delay={800}>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Subject
                      </label>
                      <Input id="subject" placeholder="Subject" required />
                    </div>
                  </LazyLoad>
                  <LazyLoad animation="fade-up" delay={900}>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        className="min-h-32"
                        required
                      />
                    </div>
                  </LazyLoad>
                  <LazyLoad animation="fade-up" delay={1000}>
                    <Button type="submit" className="w-full gap-1">
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </LazyLoad>
                </form>
              </CardContent>
            </Card>
          </LazyLoad>
        </div>
      </div>
    </section>
  );
};

export default Contact;
