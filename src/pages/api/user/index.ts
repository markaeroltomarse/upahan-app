// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ERESPONSES } from '@/data/constants/server'
import { errorHandler } from '@/server/lib/error-handler'
import { UserService } from '@/server/user/services/user.service'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const result = await errorHandler(UserService?.[(req?.method as ERESPONSES)]?.(req, res), req,res)
    res.status(200).json(result)
}

