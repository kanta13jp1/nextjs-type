import { NextApiRequest, NextApiResponse } from 'next';

export default (_: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({ name: 'Kanta', bio: '1978/9/30' });
};
