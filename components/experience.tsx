"use client"

import { useSectionInView } from '@/lib/hooks';
import React from 'react'
import SectionHeader from './section-header';
import { experiencesData } from '@/lib/data';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Experience() {
  const { ref } = useSectionInView('Experience', 0.75);
    return (
        <section ref={ref} id="experience" className="my-[15rem] scroll-mt-15 sm:mb-40 w-full">
            <div className="max-w-[53rem] mx-auto flex flex-col items-center text-center">
                <SectionHeader eyebrow="The Path So Far" title="Experience" description=''/>
            </div>
            <VerticalTimeline lineColor='#cbd1cb'>
                {
                experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement contentStyle={{ boxShadow:"none", textAlign: "left", padding: "1.3rem 2rem", }} contentArrowStyle={{ borderRight: "0.4rem" }} date={item.date} icon={item.icon} iconStyle={{ background: "white", fontSize: "1.5rem", color: "#e8a89b" }}>
                            <h2 className='font-semibold text-[$#464f42] capitalize'>{item.title}</h2>
                        <h1 className='font-extralight text-lg text-stone-700 !mt-1'>{item.description}</h1>
                    </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>

        </section>

    )
}
