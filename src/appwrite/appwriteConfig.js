import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("661fed9f519a4d5436fb");

  export const account = new Account(client)

  export default client;