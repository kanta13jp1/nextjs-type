import { NextApiResponse } from 'next';

import { IdRequest } from '../../../../lib/data/id-request';
import { Product } from '../../../../lib/data/product';
import data from '../../../../lib/shared/product-data';

export default (req: IdRequest, res: NextApiResponse): void => {
  const id = parseInt(req.query.id as string, 10);

  const product: Product = {
    id,
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
  };

  try {
    const updatedProduct = data.updateProduct(product);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).send(error);
  }
};
