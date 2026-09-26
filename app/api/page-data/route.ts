import { NextResponse } from "next/server";
import type { PortfolioPageData } from "@/lib/portfolio-types";

const pageData: PortfolioPageData = {
  experienceData: [
    {
      role: "Digital Marketing & Administration Officer",
      company: "Al Faras Painting EST",
      location: "Al Ain, UAE",
      startDate: "Aug 2024",
      endDate: "Present",
      bulletPoints: [
        "Cut client response time by reorganizing how daily inquiries and follow ups were handled.",
        "Sped up approvals by preparing accurate quotations and business documents, reducing back and forth with clients.",
        "Helped grow local brand visibility through promotional material and direct client outreach.",
      ],
    },
    {
      role: "Sales Coordinator",
      company: "Black Tiger Real Estate",
      location: "Dubai, UAE",
      startDate: "May 2025",
      endDate: "Sep 2025",
      bulletPoints: [
        "Made 300+ sales calls per day to prospective clients while managing listings and CRM updates.",
        "Kept CRM records fully current, giving the team real time visibility into which leads needed attention.",
        "Followed up consistently on listings and client queries, moving several leads further along toward closing.",
        "Put together sales reports that were used to fine tune marketing campaign timing.",
      ],
    },
    {
      role: "Chief Business Development Officer",
      company: "Boatman Travel and Tourism",
      location: "Remote, Dubai UAE",
      startDate: "Jun 2022",
      endDate: "Apr 2024",
      bulletPoints: [
        "Opened new revenue streams by building strategic B2B partnerships with travel and hospitality operators.",
        "Grew business from partner agencies by designing tourism packages, competitive wholesale pricing, and negotiated commercial agreements.",
        "Handled visa processing and documentation for clients and partner agencies as part of daily operations.",
        "Handled telecommunication with 100+ clients and partners per day to keep bookings and inquiries moving smoothly.",
      ],
    },
    {
      role: "Branch Manager",
      company: "Bio-Xin Cosmeceuticals",
      location: "Chittagong, Bangladesh",
      startDate: "Dec 2019",
      endDate: "May 2022",
      bulletPoints: [
        "Managed the full operation of the Chittagong branch, keeping daily activities organized and running smoothly.",
        "Led and managed the branch sales team, keeping everyone focused and on track toward monthly goals.",
        "Surpassed monthly revenue targets, consistently generating over 5,000,000 BDT in branch sales through team leadership and high conversion client follow ups.",
      ],
    },
    {
      role: "Assistant Manager – Marketing & Client Operations",
      company: "Airbell Technologies",
      location: "Bangladesh",
      startDate: "Apr 2018",
      endDate: "Nov 2019",
      bulletPoints: [
        "Ran digital campaigns and CRM management that improved lead conversion and client communication, backed by KPI reporting for marketing decisions.",
      ],
    },
    {
      role: "Digital Marketing Executive",
      company: "The Peninsula Chittagong Ltd",
      location: "Bangladesh",
      startDate: "Jun 2016",
      endDate: "Feb 2018",
      bulletPoints: [
        "Awarded Star of the Month (April 2017) for consistently meeting and exceeding assigned targets.",
        "Ran social media and marketing content campaigns while supporting customer engagement across online platforms.",
      ],
    },
  ],
  educationData: [
    {
      date: "2018",
      title: "Bachelor of Science in Computer Science Engineering",
      subtitle: "East Delta University -  Chittagong, Bangladesh",
    },
  ],
  additionalInfo: {
    trainingAndCertifications: [
      "Digital Marketing & Social Media Management",
      "Graphic Designing",
      "Data Entry",
    ],
    languagesAndAdditionalInfo: [
      "Bengali -  Native",
      "English -  Fluent",
      "Hindi -  Fluent",
      "Urdu -  Fluent",
      "Valid UAE Driving License",
    ],
  },
};

export const GET = async () => NextResponse.json(pageData);
