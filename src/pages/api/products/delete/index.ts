import { NextApiResponse } from 'next';

import { IdRequest } from '../../../../lib/data/id-request';
import data from '../../../../lib/shared/product-data';

export default (req: IdRequest, res: NextApiResponse): void => {
  const id = parseInt(req.query.id, 10);

  try {
    data.deleteProduct(id);
    res.status(200).json({});
  } catch (error) {
    res.status(500).send(error);
  }
};
