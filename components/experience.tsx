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
  className="my-[10rem] scroll-mt-10 sm:mb-28 w-full px-6 sm:px-40"
>
  <div className="max-w-[42rem] mx-auto flex flex-col items-center text-center">
    <SectionHeader
      eyebrow="The Path So Far"
      title="Experience"
      description=""
    />
  </div>

  <div className="mt-12">
    <VerticalTimeline lineColor="#cbd1cb">
      {experiencesData.map((item, index) => (
        <React.Fragment key={index}>
          <VerticalTimelineElement
            contentStyle={{
              boxShadow: "none",
              textAlign: "left",
              padding: "0.8rem 1.2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.3rem solid #cbd1cb",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: "white",
              fontSize: "1rem",
              color: "#e8a89b",
              transform: "scale(0.85)",
            }}
          >
            <h2 className="font-semibold text-stone-800 capitalize text-[0.95rem] leading-tight">
              {item.title}
            </h2>
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
