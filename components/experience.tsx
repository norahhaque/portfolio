"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeader from "./section-header";
import { experiencesData } from "@/lib/data";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.75);

  return (
    <section
      ref={ref}
      id="experience"
      className="my-[10rem] scroll-mt-10 sm:mb-28 w-full px-6 sm:px-20"
    >
      <div className="max-w-[42rem] mx-auto flex flex-col items-center text-center">
        <SectionHeader
          eyebrow="The Path So Far"
          title="Experience"
          description=""
        />
      </div>

      <div className="mt-12 overflow-x-hidden">
        <VerticalTimeline lineColor="#c9bcb1">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  boxShadow: "none",
                  textAlign: "left",
                  padding: "0.8rem 1.2rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.3rem solid #c9bcb1",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: "#a94e43",
                  fontSize: "1rem",
                  color: "white",
                  transform: "scale(0.85)",
                }}
              >
                <h3 className="font-semibold text-stone-800 capitalize leading-tight">
                  {item.title}
                </h3>
                <h1 className="font-light text-[0.9rem] text-stone-700 !mt-2 leading-snug">
                  {item.description}
                </h1>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}