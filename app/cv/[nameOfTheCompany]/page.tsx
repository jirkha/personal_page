import * as React from "react";
import { redirect } from "next/navigation";
import { companyData, CompanyData } from "../../data/companyData";
import ResumeCompany from "../../components/ResumeCompany";

interface PageParams {
  nameOfTheCompany: string;
}

interface PageProps {
  params: PageParams;
}

async function CompanyCV({ params }: PageProps): Promise<JSX.Element> {
  const { nameOfTheCompany } = await params;

  if (!companyData[nameOfTheCompany]) {
    redirect("/cv");
  }
  const company: CompanyData = companyData[nameOfTheCompany];

  return (
    <main style={{ background: company.bgColor }}>
      <div className="lg:pt-4">
        <ResumeCompany nameOfTheCompany={nameOfTheCompany} />
      </div>
    </main>
  );
}

export default CompanyCV;
