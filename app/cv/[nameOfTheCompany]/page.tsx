import React from "react";
import clsx from "clsx";
import { redirect } from "next/navigation";
import { companyData, CompanyData } from "../../data/companyData";
import ResumeCompany from "../../components/ResumeCompany";

type Props = {
  params: {
    nameOfTheCompany: string;
  };
};

function CompanyCV({ params }: Props): JSX.Element {
  const { nameOfTheCompany } = params;

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
