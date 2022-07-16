import React, { useEffect, useState } from 'react';

import Const from '../../const';
import { PageItem } from '../../data/page-item';

const OmitLink = (): JSX.Element => (
  <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
    ...
  </span>
);

const PageLink = ({
  page,
  active,
  handleClick,
}: {
  page: number;
  active?: boolean;
  handleClick: (page: number) => Promise<void>;
}): JSX.Element => {
  return (
    <a
      href="#"
      onClick={() => handleClick}
      className={`page-link- relative inline-flex items-center border px-4 py-2 text-sm font-medium${page} ${
        active
          ? 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
          : 'z-10 cursor-not-allowed border-indigo-500 bg-indigo-50 text-indigo-600'
      }`}
    >
      {page}
    </a>
  );
};

const NaviLink = ({
  children,
  active,
  handleClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  handleClick: () => Promise<void>;
}): JSX.Element => {
  return (
    <a
      href="#"
      onClick={() => handleClick}
      className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 ${
        active ? 'hover:bg-gray-50' : 'cursor-not-allowed'
      }`}
    >
      {children}
    </a>
  );
};

const PAGER_BUFFER = 3;

export const Pager = ({
  pageItem,
  search,
}: {
  pageItem: PageItem;
  search: (page: number) => Promise<void>;
}): JSX.Element => {
  const isFirstActive = pageItem.page !== 1;
  const isLastActive = pageItem.page !== pageItem.totalPage;

  const [pages, setPages] = useState<number[]>([]);
  useEffect(() => {
    setPages([]);
    const { page, totalPage } = pageItem;
    const from = 1 <= page - PAGER_BUFFER ? page - PAGER_BUFFER : 1;
    const to = page + PAGER_BUFFER <= (totalPage ?? []) ? page + PAGER_BUFFER : totalPage;
    for (let i = from; i <= (to ?? []); i++) {
      setPages((prev) => [...prev, i].filter((page) => page !== 1 && page !== pageItem.totalPage)); //1ページ目と最終ページは除く
    }
  }, [pageItem.page, pageItem.totalPage]);

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <NaviLink active={isFirstActive} handleClick={() => search(pageItem.page - 1)}>
          Previous
        </NaviLink>
        <NaviLink active={isLastActive} handleClick={() => search(pageItem.page + 1)}>
          Next
        </NaviLink>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            <span>Showing</span>
            <span className="mx-1 font-medium">
              {Const.defaultPageValue.perPage * (pageItem.page - 1) + 1}
            </span>
            <span>to</span>
            <span className="mx-1 font-medium">{Const.defaultPageValue.perPage}</span>
            <span>of</span>
            <span className="mx-1 font-medium">{pageItem.totalCount}</span>
            <span>results</span>
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <NaviLink active={isFirstActive} handleClick={() => search(pageItem.page - 1)}>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </NaviLink>
            {1 <= pageItem.totalPage! && (
              <PageLink page={1} handleClick={search} active={isFirstActive} />
            )}
            {0 < pages.length &&
              pages.map((page, index: number) => (
                <React.Fragment key={index}>
                  {index === 0 && 2 < page && <OmitLink />}
                  <PageLink page={page} handleClick={search} active={pageItem.page !== page} />
                  {index === pages.length - 1 && page < pageItem.totalPage! - 1 && <OmitLink />}
                </React.Fragment>
              ))}
            {2 <= pageItem.totalPage! && (
              <PageLink
                page={pageItem.totalPage as number}
                handleClick={search}
                active={isLastActive}
              />
            )}
            <NaviLink active={isLastActive} handleClick={() => search(pageItem.page + 1)}>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </NaviLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pager;
