import { Client } from 'node-appwrite';

/* 

*/
export default async ({ req, res, log, error }) => {

  /* 
   SECTION: 
   this is reqed cuz thats responsible for defining to whom the HTTPclient should req and whos reqting.
  */
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY);

  if (req.method === 'GET') {

    return res.send('Hello, World!');
  }


};
