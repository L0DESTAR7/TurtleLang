import { exec } from 'child_process';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  response: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(`Aywa?? ${req.body}`);
  const result = exec(`start a.exe "${req.body}"`, (error, stdout) => {
    console.log(stdout);
  });
  res.status(200).json({ response: "zab" })
}
