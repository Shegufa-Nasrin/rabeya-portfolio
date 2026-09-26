export interface ExperienceEntry {
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    bulletPoints: string[];
}
export interface EducationEntry {
    date: string;
    title: string;
    subtitle: string;
}
export interface AdditionalInfoData {
    trainingAndCertifications: string[];
    languagesAndAdditionalInfo: string[];
}
export interface PortfolioPageData {
    experienceData: ExperienceEntry[];
    educationData: EducationEntry[];
    additionalInfo: AdditionalInfoData;
}
