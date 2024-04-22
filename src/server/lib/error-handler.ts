import { NextApiRequest, NextApiResponse } from "next";

export const errorHandler = (callback: (req?: NextApiRequest, res?: NextApiResponse) => any, req: NextApiRequest, res: NextApiResponse) => {
    try {
        return callback(req, res)
    } catch (error) {
        console.log('error', error)
        res.status(400).json({
            status: 400,
            message: error
        })
    }
}