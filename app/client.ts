import { connectToMongoDB } from "./lib/db";

export default async function getClient() {
  const connection = await connectToMongoDB();

  const client = connection.useDb("wise-reader");

  return client;
}
