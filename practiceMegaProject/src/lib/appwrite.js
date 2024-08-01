import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('669e6f9600166471c6e5'); // Replace with your project ID


export const account = new Account(client);
export { ID } from 'appwrite';

