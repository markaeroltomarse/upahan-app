import { NextApiRequest, NextApiResponse } from 'next';
import { IRESPONSES } from './../../../data/constants/server';

export const UserService: IRESPONSES = {
    async GET(req: NextApiRequest, res: NextApiResponse) {
        if (!req.query?.data) {
            throw new Error('Error')
        }
        return { message: 'GET'}
    },
    async POST(req: NextApiRequest, res: NextApiResponse) {
        return { message: 'POST'}
    }
}
