"use client";

import { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { pdfjs } from "react-pdf";
import { ResumePDF } from "./pdf";

interface PDFDownloadButtonProps {
  nameOfTheCompany: string;
  color: string;
}

const PDFDownload = ({ nameOfTheCompany, color }: PDFDownloadButtonProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();

  return (
    <>
      {loaded && (
        <div className="">
          <PDFDownloadLink
            document={<ResumePDF nameOfTheCompany={nameOfTheCompany} />}
            fileName={`cv-jiri-vecko-${nameOfTheCompany}.pdf`}
          >
            {({ loading }) => (
              <button
                className="2xl:w-40 bg-white hover:bg-neutral-100 font-bold font-sans text-lg border-2 rounded-lg px-4 py-2 cursor-pointer shadow-md shadow-black"
                style={{
                  color: color,
                }}
              >
                {loading ? "Generuji PDF..." : "Stáhnout PDF"}
              </button>
            )}
          </PDFDownloadLink>
        </div>
      )}
    </>
  );
};

export default PDFDownload;
