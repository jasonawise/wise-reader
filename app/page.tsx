import ReaderView from "@/app/components/ReaderView";
import getClient from "./client";

export default async function Home() {
  const mongoClient = await getClient();

  const urls = mongoClient.collection("urls");

  const cursor = urls.find();

  // Print a message if no documents were found
  if ((await urls.countDocuments()) === 0) {
    console.log("No documents found!");
  }

  for await (const doc of cursor) {
    console.dir(doc);
  }

  return <div className={"w-5/6 flex flex-col mx-auto"}>{<ReaderView />}</div>;
}
