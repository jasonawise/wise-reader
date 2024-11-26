import { useEffect, useState } from "react";
import { getReaderData } from "@/app/actions/getReaderData";

export default function useReaderData(url: string) {
  const [readerData, setReaderData] = useState<any>();
  useEffect(() => {
    getReaderData(url).then((data) => {
      setReaderData(data);
    });
  }, []);

  return readerData;
}
