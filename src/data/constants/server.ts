import { NextApiRequest, NextApiResponse } from "next";

export interface IRESPONSES {
    'POST'?: (req: NextApiRequest,res: NextApiResponse) => any,
    'GET'?: (req: NextApiRequest, res: NextApiResponse) => any,
    'PUT'?: (req: NextApiRequest, res: NextApiResponse) => any
    'DELETE'?: (req: NextApiRequest, res: NextApiResponse) => any
    'PATCH'?: (req: NextApiRequest, res: NextApiResponse) => any
} 

export enum ERESPONSES {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH= 'PATCH'
}

