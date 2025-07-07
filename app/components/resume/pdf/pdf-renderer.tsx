"use client";

import { useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { pdfjs } from "react-pdf";
import { ResumePDF } from "./pdf";

interface PDFRendererProps {
  company: string | null;
}

const PDFRenderer = ({ company }: PDFRendererProps) => {
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
        <PDFViewer style={{ width: "100%", height: "90vh" }}>
          <ResumePDF nameOfTheCompany={company ?? null} />
        </PDFViewer>
      )}
    </>
  );
};

export default PDFRenderer;