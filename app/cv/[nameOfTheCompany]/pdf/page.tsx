"use client";

import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

const PDFRenderer = dynamic(
  () => import("@/app/components/resume/pdf/pdf-renderer"),
  { ssr: false }
);

export default function Page(): JSX.Element {
  const params = useParams<{ nameOfTheCompany?: string }>();
  const company: string | null = params["nameOfTheCompany"] ?? null;

  return <PDFRenderer company={company} />;
}
