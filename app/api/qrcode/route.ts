// pages/api/qrcode.ts
import { NextApiRequest, NextApiResponse } from 'next';
import QRCode from 'qrcode';

export async function GET(req: NextApiRequest, res: NextApiResponse) {

  const { url } = req.body;
  console.log(url)
 
  const result = await QRCode.toDataURL('https://docs.digitalocean.com')
    const data = await result.json()
	return Response.json(data)
}
