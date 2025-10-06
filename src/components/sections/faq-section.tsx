"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    value: "item-1",
    question: "What is GDG On Campus, and how is it different?",
    answer:
      "GDG On Campus is a student-led tech community backed by Google Developers. It’s focused on peer-to-peer learning, building tech skills, and community projects. Unlike typical tech clubs, GDG is recognized globally and provides direct opportunities to engage with Google technologies and experts.",
  },
  {
    value: "item-2",
    question: "Who can join GDG On Campus?",
    answer: "Any student with a passion for technology is welcome! We encourage students from all courses and years to join, learn, and contribute to the community.",
  },
  {
    value: "item-3",
    question: "How do I get started with GDG On Campus?",
    answer: "Follow our social media pages for updates on events and workshops. You can also join our official community groups on platforms like WhatsApp or Discord to connect with other members and get involved in projects.",
  },
  {
    value: "item-4",
    question: "What kind of events does GDG On Campus host?",
    answer: "We host a variety of events, including technical workshops, speaker sessions from industry experts, hackathons, coding competitions, and networking sessions. Our events cover a wide range of topics from web development and AI to cloud computing and mobile app development.",
  },
  {
    value: "item-5",
    question: "How does GDG On Campus help in career growth?",
    answer: "By participating, you gain hands-on experience, build a portfolio of projects, and network with professionals. We provide a platform for you to learn new skills, take on leadership roles, and collaborate on real-world problems, all of which are valuable for your career.",
  },
  {
    value: "item-6",
    question: "Is GDG On Campus officially supported by Google?",
    answer: "Yes, GDG On Campus is part of the global Google Developer Groups program. We receive support from Google in the form of resources, guidance, and speaker access, which helps us deliver high-quality events and opportunities to our members.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-[#f8f5f0] py-12 md:py-24 px-8">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 mb-10 lg:mb-0">
            <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight">
              Frequently
              <br />
              asked
              <br />
              questions
            </h2>
          </div>
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
              {faqData.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="border-b border-gray-200 last:border-b-0 data-[state=open]:rounded-lg data-[state=open]:bg-blue-100 data-[state=open]:border-b-0"
                >
                  <AccordionTrigger className="group flex w-full items-start justify-between p-6 text-left text-lg font-semibold text-blue-600 hover:no-underline">
                    <span className="flex-1 pr-4">{item.question}</span>
                    <Plus className="h-6 w-6 flex-shrink-0 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-45" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-base text-gray-700" style={{ lineHeight: '1.6' }}>
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}