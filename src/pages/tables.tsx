import Head from 'next/head';
import { ReactElement } from 'react';

import DashboardLayout from '@/components/template/dashboard-layout';

export default function Tables(): JSX.Element {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex min-h-screen flex-col items-start justify-start py-0 px-2">
        <Head>
          <title>Tables</title>
        </Head>
        <main>
          <h1 className="decoration-sky-500">Tables Sample</h1>
          <br />
          table-auto border
          <div className="overflow-x-auto">
            <table className="table-auto border">
              <thead className="border-b bg-sky-300">
                <tr>
                  <th className="border-r px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Song
                  </th>
                  <th className="border-r px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Artist
                  </th>
                  <th className="border-r px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Year
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="border-r px-6 py-4 text-sm font-light text-gray-900">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="border-r px-6 py-4 text-sm font-light text-gray-900">
                    Malcolm Lockyer
                  </td>
                  <td className="border-r px-6 py-4 text-sm font-light text-gray-900">1961</td>
                </tr>
                <tr className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="border-r px-6 py-4 text-sm font-light text-gray-900">
                    Witchy Woman
                  </td>
                  <td className="border-r px-6 py-4 text-sm font-light text-gray-900">
                    The Eagles
                  </td>
                  <td className="border-r px-6 py-4 text-sm font-light text-gray-900">1972</td>
                </tr>
                <tr className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="border-r px-6 py-4 text-sm font-light text-gray-900">
                    Shining Star
                  </td>
                  <td className="border-r px-6 py-4 text-sm font-light text-gray-900">
                    Earth, Wind, and Fire
                  </td>
                  <td className="border-r px-6 py-4 text-sm font-light text-gray-900">1975</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          table-fixed border
          <div className="overflow-x-auto">
            <table className="table-fixed border">
              <thead className="border-b bg-sky-300">
                <tr>
                  <th className="border-r px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Song
                  </th>
                  <th className="border-r px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Artist
                  </th>
                  <th className="border-r px-6 py-4 text-left text-sm font-medium text-gray-900">
                    Year
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="border-r px-6 py-4 text-sm font-light text-gray-900">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="border-r px-6 py-4 text-sm font-light text-gray-900">
                    Malcolm Lockyer
                  </td>
                  <td className="border-r px-6 py-4 text-sm font-light text-gray-900">1961</td>
                </tr>
                <tr className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="border-r px-6 py-4 text-sm font-light text-gray-900">
                    Witchy Woman
                  </td>
                  <td className="border-r px-6 py-4 text-sm font-light text-gray-900">
                    The Eagles
                  </td>
                  <td className="border-r px-6 py-4 text-sm font-light text-gray-900">1972</td>
                </tr>
                <tr className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="border-r px-6 py-4 text-sm font-light text-gray-900">
                    Shining Star
                  </td>
                  <td className="border-r px-6 py-4 text-sm font-light text-gray-900">
                    Earth, Wind, and Fire
                  </td>
                  <td className="border-r px-6 py-4 text-sm font-light text-gray-900">1975</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

Tables.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout title={'テーブル'}>{page}</DashboardLayout>;
};
