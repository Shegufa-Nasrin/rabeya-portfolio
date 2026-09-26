"use client";
import type { ExperienceEntry, PortfolioPageData } from "@/lib/portfolio-types";
import { useEffect, useState } from "react";

const Experience = () => {
    const [experienceData, setExperienceData] = useState<ExperienceEntry[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data: PortfolioPageData = await res.json()
                setExperienceData(data?.experienceData)
            } catch (error) {
                console.error('Error fetching experience:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-4xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Experience</p>
                        </div>
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="flex flex-col max-w-4xl mx-auto px-4 sm:px-7 py-9 md:py-16 ">
                            {experienceData.map((value, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-5 border-dashed border-b border-primary/10 last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0">
                                        <div className="flex flex-wrap gap-5 items-center justify-between md:grid md:grid-cols-[minmax(0,1fr)_auto]">
                                            <div className="min-w-0 flex flex-col gap-2">
                                                <h5>{value.role}</h5>
                                                <p className="text-primary">{value.company}</p>
                                            </div>
                                            <div className="flex max-w-full items-center gap-2.5 border border-primary/10 rounded-lg py-1.5 px-3 md:justify-self-end md:whitespace-nowrap">
                                                <div className={`w-4 h-2 shrink-0 rounded-sm ${value.endDate === "Present" ? 'bg-primary' : 'bg-primary/10'} `} />
                                                <p className="min-w-0 text-sm xs:text-base text-primary">{value.startDate} – {value.endDate} · {value.location}</p>
                                            </div>
                                        </div>
                                        <ul>
                                            {value.bulletPoints.map((point, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="flex items-start gap-2 text-base font-normal text-secondary"
                                                    >
                                                        <span className="w-2.5 h-2.5 shrink-0 text-secondary">•</span>
                                                        {point}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Experience
