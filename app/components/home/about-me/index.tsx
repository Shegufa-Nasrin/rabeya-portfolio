import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
  const coreSkills = [
    "CRM System",
    "Client & Customer Communication",
    "Customer Service",
    "Lead Generation",
    "Sales Pipeline Management",
    "Social Media Management",
    "Meta Business Suite",
    "MIS & KPI Reporting",
    "Telemarketing",
    "Telecommunication",
    "AI Power Productivity Tools",
    "Scheduling & Calendar Management",
    "Microsoft Office & Google Workspace",
    "Canva",
    "Multilingual Communication",
  ];
  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col gap-9 sm:gap-12 max-w-4xl mx-auto px-4 sm:px-7 py-11 md:py-20">
            <div className="flex flex-col gap-4">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                About Me
              </p>
              <h2 className="text-xl sm:text-2xl md:text-[22px] lg:text-[23px] font-normal leading-[1.3] text-left md:text-justify text-pretty">
                With over 8 years of experience across sales, client
                coordination and marketing roles in the UAE and Bangladesh, I
                have built a steady record of{" "}
                <span className="bg-[linear-gradient(90deg,rgba(243,202,77,0.4)_0%,rgba(243,202,77,0.05)_100%)]">
                  meeting targets
                </span>{" "}
                while keeping client relationships and day to day operations
                organized.
              </h2>
              <h5 className="text-secondary font-normal">
                Comfortable working with CRM systems, reporting and customer
                communication, I bring a multilingual background across Bengali,
                English, Hindi and Urdu to customer-facing roles in customer
                service, sales, marketing and aviation.
              </h5>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-primary uppercase font-medium">
                Core Skills
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {coreSkills.map((value, index) => {
                  return (
                    <Badge
                      variant={"outline"}
                      key={index}
                      className="py-1.5 px-3 rounded-lg max-w-full whitespace-normal"
                    >
                      <p className="text-xs sm:text-sm font-medium text-primary">
                        {value}
                      </p>
                    </Badge>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
