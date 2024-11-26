"use client";
import useReaderData from "@/app/hooks/useReaderData";
import DOMPurify from "dompurify";

type readerViewProps = {
  url: string;
};

export default function ReaderView({ url }: readerViewProps) {
  const readerData = useReaderData(
    "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations"
  );
  if (!readerData) return <p>oopps no reader data!</p>;

  return (
    <div
      className="reader-view"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(readerData?.content),
      }}
    ></div>
  );
}
