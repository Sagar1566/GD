"use client";

import { useState, useRef, useEffect, type FC } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Event {
  month: string;
  title: string;
  bgColor: string;
  topics: string[];
  link?: string;
}

const eventsData: Event[] = [
  {
    month: 'October',
    title: 'Build with AI (Gen AI Study Jams)',
    bgColor: 'bg-[#fcd19c]',
    topics: [
      'Prompt Engineering Basics',
      'Gemini & PaLM Overview',
      'Text Generation with LLMs',
      'Multimodal AI Applications',
      'Responsible AI Practices',
      'Building AI Apps with Gemini API',
      'Deploying GenAI Projects',
    ],
  },
  {
    month: 'November',
    title: 'Tech Winter Break',
    bgColor: 'bg-[#93c5fd]',
    topics: [
      'DSA',
      'Intro to APIs',
      'Frontend Project Building',
      'Git & GitHub Essentials',
      'Hackathon Prep',
      'Live Coding Sessions',
      'Community Mentoring',
    ],
  },
  {
    month: 'January',
    title: 'Winter Of Code [GDG VIT x GDG IIIT Kalyani]',
    bgColor: 'bg-[#fb923c]',
    topics: [
      'Open Source Fundamentals',
      'Contributing to Repos',
      'Pull Requests & Issues',
      'Pair Programming',
      'Maintainer Walkthroughs',
      'Weekly Check-ins',
      'Project Deployment',
      'GitHub Project Boards',
    ],
  },
  {
    month: 'February',
    title: 'Solutions Challenge Info Session',
    bgColor: 'bg-[#fda4af]',
    topics: [
      'UN Sustainable Development Goals',
      'How to Participate',
      'Project Brainstorming',
      'Tech Stack Suggestions',
      'Team Formation',
      'Submission Guidelines',
      'Tips from Past Winners',
    ],
  },
  {
    month: 'March',
    title: 'Shape The Web [UI/UX Figma Workshop & Competition] [GDG VIT x FOF Mumbai]',
    bgColor: 'bg-[#c4b5fd]',
    topics: [
      'Figma Crash Course',
      'Design Thinking Process',
      'Color Theory & Typography',
      'Wireframing & Prototyping',
      'UX Case Studies',
      'Design-to-Code Practices',
      'Feedback & Iteration',
      'Competition Design Brief',
    ],
  },
  {
    month: 'April',
    title: 'Beyond The Browser - MERN Workshop',
    bgColor: 'bg-[#7dd3fc]',
    topics: [
      'MongoDB Essentials',
      'Express.js Basics',
      'React Components',
      'Node.js Introduction',
      'Building APIs',
      'MERN Stack Integration',
      'Deployment on Render/Netlify',
    ],
  },
  {
    month: 'June',
    title: 'Code the Cloud Hackathon [GDG VIT x GDG Cloud Mumbai]',
    bgColor: 'bg-[#d8b4fe]',
    topics: [
      'Cloud Project Ideation',
      'Using Firebase & GCP',
      'Team Collaboration Tools',
      'Working with APIs',
      'Cloud Functions',
      'Real-time Databases',
      'Pitching & Demo Day',
      'Judging Criteria Insights',
    ],
  },
  {
    month: 'August',
    title: 'Spectrum - Flagship Event',
    bgColor: 'bg-[#86efac]',
    link: 'https://spectrum.gdgvitm.tech/',
    topics: [
      'DSA', 'CP', 'Vibe Coding', 'AI SaaS', 'Startup', 'AI/ML', 'Web3', 'GSOC', 'OpenSource', 'Hackathon', 'TechInnovation', 'Blockchain', 'UIUX', 'GenerativeAI', 'MobileDev', 'FullStack', 'ProductDesign', 'Innovation',
    ],
  },
];

const TimelineCard: FC<{ event: Event }> = ({ event }) => (
  <div className={`${event.bgColor} rounded-xl p-6 w-full`}>
    <h3 className="text-xl font-bold text-black mb-4">{event.title}</h3>
    {event.link && (
      <a
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-black/80 hover:text-black transition-colors mb-4 text-sm font-semibold"
      >
        <span>Checkout Spectrum’s Website</span>
        <ArrowUpRight className="w-4 h-4" />
      </a>
    )}
    <div className="flex flex-wrap gap-2">
      {event.topics.map((topic) => (
        <span
          key={topic}
          className="px-4 py-2 bg-black/5 rounded-full text-sm text-black/80 font-medium"
        >
          {topic}
        </span>
      ))}
    </div>
  </div>
);

const TimelineEvent: FC<{ event: Event }> = ({ event }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <div className="absolute top-1 left-[10%] md:left-[30%] -translate-x-1/2 w-4 h-4 rounded-full bg-[#fbbf24] border-4 border-white z-10" />

      {/* Mobile Layout */}
      <div className={`md:hidden ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in`}>
        <p className="pl-[calc(10%+1.5rem)] text-2xl font-bold mb-4">{event.month}</p>
        <div className={`ml-[10%] pl-6 transition-transform duration-500 ease-in ${isVisible ? 'translate-x-0' : '-translate-x-4'}`}>
          <TimelineCard event={event} />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className={`hidden md:grid md:grid-cols-[30%_70%] items-start ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in`}>
        <p className="text-right text-2xl font-bold pr-12">{event.month}</p>
        <div className={`pl-8 transition-transform duration-500 ease-in ${isVisible ? 'translate-x-0' : 'translate-x-4'}`}>
          <TimelineCard event={event} />
        </div>
      </div>
    </div>
  );
};

export default function EventsTimeline() {
  return (
    <section className="bg-[#f8f5f0] w-full py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-[56px] font-black text-black mb-20 md:mb-24">
          Events Till Now...
        </h2>
        <div className="relative">
          <div className="absolute h-full w-1 bg-black top-0 left-[10%] md:left-[30%] -translate-x-1/2" />
          <div className="space-y-12">
            {eventsData.map((event, index) => (
              <TimelineEvent key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}