"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const destinations = [
  { id: "tokyo", name: "Tokyo Explorer", location: "Tokyo, Japan", days: 7, icon: "🗼" },
  { id: "bali", name: "Bali Getaway", location: "Bali, Indonesia", days: 5, icon: "🏝️" },
  { id: "paris", name: "Paris Romance", location: "Paris, France", days: 4, icon: "🗼" },
  { id: "swiss", name: "Swiss Adventure", location: "Interlaken, Switzerland", days: 6, icon: "🏔️" },
];

const features = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
        />
      </svg>
    ),
    title: "AI-Powered Itineraries",
    description:
      "Get personalized day-by-day plans crafted by AI based on your preferences and travel style.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    title: "Discover Hidden Gems",
    description:
      "Explore curated destinations from beaches to historic sites, with local insights and ratings.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>
    ),
    title: "Chat with TripMentor",
    description:
      "Ask questions, swap days, add food recommendations, or find hotels — all through natural conversation.",
  },
];


function ItineraryBuilderCard() {
  const [selectedDestination, setSelectedDestination] = useState(destinations[0]);
  const [tripDays, setTripDays] = useState(7);
  const [travelStyle, setTravelStyle] = useState("balanced");

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2">
        {destinations.map((dest) => (
          <button
            key={dest.id}
            onClick={() => setSelectedDestination(dest)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
              selectedDestination.id === dest.id
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "bg-white border border-card-border hover:border-primary/30"
            }`}
          >
            <span className="text-lg">{dest.icon}</span>
            <div>
              <p className={`text-sm font-medium ${selectedDestination.id === dest.id ? "text-white" : "text-foreground"}`}>
                {dest.name}
              </p>
              <p className={`text-xs ${selectedDestination.id === dest.id ? "text-white/70" : "text-muted"}`}>
                {dest.location}
              </p>
            </div>
          </button>
        ))}
      </div>

      <div className="flex-1 bg-white rounded-2xl border border-card-border shadow-xl shadow-foreground/5 p-6 min-w-[280px]">
        <h3 className="font-medium text-foreground mb-6">Edit itinerary</h3>
        
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted mb-1.5 block">Destination</label>
              <div className="px-3 py-2 bg-background rounded-lg border border-card-border text-sm text-foreground">
                {selectedDestination.location.split(",")[0]}
              </div>
            </div>
            <div>
              <label className="text-xs text-muted mb-1.5 block">Duration</label>
              <select 
                value={tripDays}
                onChange={(e) => setTripDays(Number(e.target.value))}
                className="w-full px-3 py-2 bg-background rounded-lg border border-card-border text-sm text-foreground appearance-none cursor-pointer"
              >
                {[3, 4, 5, 6, 7, 10, 14].map((d) => (
                  <option key={d} value={d}>{d} days</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs text-muted mb-1.5 block">Travel style</label>
            <div className="flex gap-2">
              {["relaxed", "balanced", "adventure"].map((style) => (
                <button
                  key={style}
                  onClick={() => setTravelStyle(style)}
                  className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium capitalize transition-all ${
                    travelStyle === style
                      ? "bg-primary text-white"
                      : "bg-background border border-card-border text-muted hover:border-primary/30"
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted mb-1.5 block">Budget</label>
              <div className="px-3 py-2 bg-background rounded-lg border border-card-border text-sm text-foreground">
                Moderate
              </div>
            </div>
            <div>
              <label className="text-xs text-muted mb-1.5 block">Travelers</label>
              <div className="px-3 py-2 bg-background rounded-lg border border-card-border text-sm text-foreground">
                2 adults
              </div>
            </div>
          </div>

          <button className="w-full py-3 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            Generate Itinerary
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logos/logo-tiel.png"
              alt="TripMentor Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <span className="font-display font-semibold text-xl text-foreground">
              TripMentor
            </span>
          </div>
          <a
            href="#download"
            className="px-5 py-2 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-dark transition-colors"
          >
            Download
          </a>
        </div>
      </nav>

      <main>
        <section className="relative min-h-screen">
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(232, 244, 244)"
            gradientBackgroundEnd="rgb(250, 252, 252)"
            firstColor="74, 155, 155"
            secondColor="91, 181, 181"
            thirdColor="45, 107, 107"
            fourthColor="100, 180, 180"
            fifthColor="74, 155, 155"
            pointerColor="91, 181, 181"
            size="100%"
            blendingValue="soft-light"
            interactive={true}
            containerClassName="!h-full !w-full absolute inset-0"
          />
          
          <div className="relative z-10 pt-32 pb-20 px-6">
            <motion.div
              className="max-w-6xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full mb-6 border border-primary/20">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-primary-dark">
                      AI-Powered Travel
                    </span>
                  </div>
                  <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-[1.1] mb-6">
                    Plan trips that
                    <br />
                    <span className="text-primary">feel like magic</span>
                  </h1>
                  <p className="text-lg text-muted leading-relaxed mb-8 max-w-md">
                    TripMentor creates personalized itineraries in seconds. Just
                    tell us where you want to go, and let AI handle the rest.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#download"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-white font-medium rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-foreground/10"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      App Store
                    </a>
                    <a
                      href="#features"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm border border-card-border text-foreground font-medium rounded-full hover:bg-white hover:border-primary/30 transition-colors"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative flex justify-center">
                    <div className="relative w-[280px] h-[580px]">
                      <Image
                        src="/screenshots/chat.png"
                        alt="TripMentor AI Chat"
                        fill
                        className="object-cover rounded-[2.5rem] shadow-2xl shadow-primary/30"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.05]" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-3xl" />
          
          <div className="relative max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm font-medium text-primary mb-3">Itinerary Builder</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5">
                  Intelligent planning.
                  <br />
                  From idea to adventure.
                </h2>
                <p className="text-muted text-lg leading-relaxed mb-6 max-w-md">
                  Flexibly plan for any destination, duration, or travel style. 
                  Get personalized recommendations, local insights & more.
                </p>
                <p className="text-muted leading-relaxed max-w-md">
                  Go from dreaming to booking and everything in between.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <ItineraryBuilderCard />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative py-32 px-6 overflow-hidden bg-white">
          <div className="relative max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative order-2 lg:order-1"
              >
                <div className="bg-background rounded-3xl border border-card-border shadow-xl shadow-foreground/5 p-6 max-w-[380px] mx-auto">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                    </div>
                    <span className="font-medium text-primary">TripMentor AI</span>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-card-border/30 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                      <p className="text-sm text-foreground">Would you like me to build a full itinerary for you?</p>
                    </div>

                    <div className="bg-primary/10 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] ml-auto">
                      <p className="text-sm text-foreground">Yes please! I have 5 days. Build me something amazing</p>
                    </div>

                    <div className="bg-card-border/30 rounded-2xl rounded-tl-sm px-4 py-3">
                      <p className="text-sm text-foreground mb-3">Here&apos;s your 5-day Tokyo itinerary! I&apos;ve curated the best experiences for each day:</p>
                      
                      <div className="flex items-center gap-2 text-primary text-xs font-medium mb-3">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                        </svg>
                        Itinerary
                      </div>

                      <div className="flex gap-3 overflow-hidden">
                        <div className="flex-shrink-0 w-[140px]">
                          <div className="relative h-[90px] rounded-xl overflow-hidden mb-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                            <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-medium px-2 py-0.5 rounded">Day 1</div>
                          </div>
                          <p className="text-xs font-medium text-foreground">Shibuya & Harajuku</p>
                          <p className="text-[10px] text-muted">Explore Shibuya Crossing...</p>
                        </div>
                        <div className="flex-shrink-0 w-[140px]">
                          <div className="relative h-[90px] rounded-xl overflow-hidden mb-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20" />
                            <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-medium px-2 py-0.5 rounded">Day 2</div>
                          </div>
                          <p className="text-xs font-medium text-foreground">Asakusa & Akihabara</p>
                          <p className="text-[10px] text-muted">Visit Senso-ji Temple...</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
                          ))}
                        </div>
                        <span className="text-xs text-primary font-medium">5 days planned</span>
                      </div>
                    </div>

                    <div className="bg-card-border/30 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[95%]">
                      <p className="text-sm text-muted">Want me to adjust anything? I can swap days, add food recommendations, or find hotels near each area.</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-card-border">
                    <span className="text-muted text-sm">Share with TripMentor...</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <p className="text-sm font-medium text-primary mb-3">AI Chat Assistant</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5">
                  Itineraries on
                  <br />
                  auto-pilot
                </h2>
                <p className="text-muted text-lg leading-relaxed mb-6 max-w-md">
                  Chat naturally with TripMentor AI to build, edit, and refine your travel plans instantly.
                </p>
                <p className="text-muted leading-relaxed max-w-md">
                  Ask for recommendations, swap activities, add dining spots, or find nearby hotels — all through simple conversation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Everything you need to travel smarter
              </h2>
              <p className="text-muted text-lg max-w-xl mx-auto">
                From AI-generated itineraries to real-time chat assistance,
                TripMentor has you covered.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="p-8 rounded-2xl bg-background border border-card-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-primary mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="py-24 px-6 bg-white">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/logos/logo-tiel.png"
              alt="TripMentor Logo"
              width={96}
              height={96}
              className="w-24 h-24 mx-auto mb-8"
            />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Start planning your next adventure
            </h2>
            <p className="text-muted text-lg mb-10 max-w-lg mx-auto">
              Download TripMentor and let AI create your perfect itinerary in seconds.
              Available now on the App Store.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-white font-medium rounded-full hover:bg-primary-dark transition-colors text-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store
            </a>
          </motion.div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-card-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                />
              </svg>
            </div>
            <span className="font-display font-semibold text-foreground">
              TripMentor
            </span>
          </div>
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} TripMentor. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
