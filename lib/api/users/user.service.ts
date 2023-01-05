import { NextApiHandler } from 'next';
import prisma from '@/lib/prisma';

export const getUser: NextApiHandler = async (req, res) => {
  console.log('connect');
  try {
    const { id } = req.query;
    const exists = await prisma.user.findUnique({
      where: {
        id: id as string,
      },
    });
    res.status(200).json(exists);
  } catch (e: any) {
    res.status(404).json({ message: e.message });
  }
};
