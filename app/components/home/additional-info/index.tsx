"use client";
import { useEffect, useState } from "react";
import type {
  AdditionalInfoData,
  PortfolioPageData,
} from "@/lib/portfolio-types";

const AdditionalInfo = () => {
  const [additionalInfo, setAdditionalInfo] =
    useState<AdditionalInfoData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data: PortfolioPageData = await res.json();
        setAdditionalInfo(data.additionalInfo);
      } catch (error) {
        console.error("Error fetching additional information:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col max-w-4xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-9 md:py-16">
            <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
              <p className="xs:w-2/5 lg:max-w-2xs shrink-0 text-sm tracking-[2px] text-primary uppercase font-medium">
                Training &amp; Certifications
              </p>
              <ul className="flex flex-col gap-2.5 min-w-0">
                {additionalInfo?.trainingAndCertifications.map((entry) => (
                  <li key={entry}>
                    <h4>{entry}</h4>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
              <p className="xs:w-2/5 lg:max-w-2xs shrink-0 text-sm tracking-[2px] text-primary uppercase font-medium">
                Languages &amp; Additional Info
              </p>
              <ul className="flex flex-col gap-2.5 min-w-0">
                {additionalInfo?.languagesAndAdditionalInfo.map((entry) => (
                  <li key={entry}>
                    <h4>{entry}</h4>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
