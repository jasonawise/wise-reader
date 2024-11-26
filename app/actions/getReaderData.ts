"use server";
import cleanHtml from "clean-html-js";

export async function getReaderData(url: string): Promise<any> {
  const source = await fetch(url);
  const html = await source.text();
  const readabilityArticle = await cleanHtml(html, url);

  return readabilityArticle;
}
