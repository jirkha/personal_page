import * as React from "react";
import { redirect } from "next/navigation";
import { companyData, CompanyData } from "../../data/companyData";
import ResumeCompany from "../../components/ResumeCompany";

interface Props {
  params: {
    nameOfTheCompany: string;
  };
}

async function CompanyCV({ params }: Props): Promise<JSX.Element> {
  const awaitedParams = await params;
  const { nameOfTheCompany } = awaitedParams;

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
