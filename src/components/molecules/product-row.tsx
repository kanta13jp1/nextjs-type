import { useRouter } from 'next/router';

import { Product } from '../../repository/product-repository';

export const ProductRow = ({ product }: { product: Product }): JSX.Element => {
  const router = useRouter();

  return (
    <tr>
      <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
        <div className="flex items-center">
          <div className="text-sm font-medium leading-5 text-gray-900">{product.name}</div>
        </div>
      </td>

      <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
        <div className="text-sm leading-5 text-gray-500">{product.description}</div>
      </td>

      <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4 text-sm leading-5 text-gray-500">
        {product.quantity}
      </td>

      <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4">
        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
          Active
        </span>
      </td>

      <td className="whitespace-no-wrap border-b border-gray-200 px-6 py-4 text-right text-sm font-medium leading-5">
        <a
          href="#"
          onClick={() => router.push(`/product/${product.id}`)}
          className="text-indigo-600 hover:text-indigo-900"
        >
          Edit
        </a>
      </td>
    </tr>
  );
};

export default ProductRow;
