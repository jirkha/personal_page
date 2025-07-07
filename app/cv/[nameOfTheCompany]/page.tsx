
import * as React from "react";
import { redirect } from "next/navigation";
import { companyData, CompanyData } from "../../data/companyData";
import ResumeCompany from "../../components/resume/resume-company";
import PDFDownloadButton from "../../components/resume/pdf/pdf-download";
import Link from "next/link";

interface ResolvedPageParams {
  nameOfTheCompany: string;
}

interface PageProps {
  params: Promise<ResolvedPageParams>;
}

async function CompanyCV({ params }: PageProps): Promise<JSX.Element> {
  const { nameOfTheCompany } = await params;

  if (!companyData[nameOfTheCompany]) {
    redirect("/cv");
  }
  const company: CompanyData = companyData[nameOfTheCompany];

  return (
    <main
      className="relative w-full min-h-screen py-4"
      style={{ background: company.bgColor }}
    >
      {/* MENŠÍ ZAŘÍZENÍ – tlačítko nahoře, součást scrollu */}
      <div className="flex flex-row justify-center 2xl:hidden text-center mb-4">
        <PDFDownloadButton
          nameOfTheCompany={nameOfTheCompany}
          color={company.textColor}
        />
        <Link href={`/cv/${nameOfTheCompany}/pdf`}>
          <button className="w-40 bg-white hover:bg-neutral-100 font-bold font-sans text-gray-600 text-lg border-2 border-gray-600 rounded-lg px-4 py-2 ml-3 cursor-pointer shadow-md shadow-black">
            Zobraz PDF
          </button>
        </Link>
      </div>

      {/* VĚTŠÍ ZAŘÍZENÍ – fixní tlačítko napravo */}
      <div
        className="hidden 2xl:flex 2xl:flex-col fixed z-50"
        style={{
          top: "117px",
          left: "calc(50% + 520px)",
        }}
      >
        <PDFDownloadButton
          nameOfTheCompany={nameOfTheCompany}
          color={company.textColor}
        />
        <Link href={`/cv/${nameOfTheCompany}/pdf`}>
          <button className="w-40 bg-white hover:bg-neutral-100 font-bold font-sans text-gray-600 text-lg border-2 border-gray-600 rounded-lg px-4 py-2 mt-3 cursor-pointer shadow-md shadow-black">
            Zobraz PDF
          </button>
        </Link>
      </div>

      {/* OBSAH */}
      <div className="max-w-[900px] mx-auto px-4">
        <ResumeCompany nameOfTheCompany={nameOfTheCompany} />
      </div>
    </main>
  );
}

export default CompanyCV;
