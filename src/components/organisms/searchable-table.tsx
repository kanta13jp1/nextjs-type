import { AxiosResponse } from 'axios';
import React, { Dispatch, SetStateAction } from 'react';
import { UseQueryResult } from 'react-query';

import { PageItem } from '../../data/page-item';
import { SortItem } from '../../data/sort-item';
import { TableHeaderItem } from '../../data/table-header-item';
import Pager from '../molecules/pager';
import TableHeader from '../molecules/table-header';

export const SearchableTable = ({
  children,
  headerItems,
  pageItem,
  sortItem,
  setSortItem,
  search,
  queryResult,
}: {
  children: React.ReactNode;
  headerItems: TableHeaderItem[];
  pageItem: PageItem;
  sortItem: SortItem;
  setSortItem: Dispatch<SetStateAction<SortItem>>;
  search: (page: number, sortItem?: SortItem) => Promise<void>;
  queryResult: UseQueryResult<AxiosResponse, unknown>;
}): JSX.Element => {
  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 overflow-x-auto py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="inline-block min-w-full overflow-hidden border-b border-gray-200 align-middle shadow sm:rounded-lg">
          <table className="min-w-full">
            <thead>
              <TableHeader
                headerItems={headerItems}
                sortItem={sortItem}
                setSortItem={setSortItem}
                search={search}
              />
            </thead>

            {children}
          </table>
          {queryResult.isFetched && <Pager search={search} pageItem={pageItem} />}
        </div>
      </div>
    </div>
  );
};

export default SearchableTable;
