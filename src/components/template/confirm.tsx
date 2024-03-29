import _ from 'lodash';

import Button from '../atoms/button';
import Link from '../atoms/link';
import Typography from '../atoms/typography';

type Map = {
  key: string;
  element: React.ReactNode;
};

const IconMapping: Map[] = [
  {
    key: 'info',
    element: (
      <>
        <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 sm:mx-0 sm:h-10 sm:w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </>
    ),
  },
  {
    key: 'warn',
    element: (
      <>
        <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-200 sm:mx-0 sm:h-10 sm:w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-yellow-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </>
    ),
  },
  {
    key: 'alert',
    element: (
      <>
        <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-red-700"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </>
    ),
  },
];

export const Confirm = ({
  title,
  children,
  onSubmit,
  confirmationText = 'OK',
  onClose,
  cancellationText = 'Cancel',
  onCancel,
  icon,
  alert = false,
  processing,
}: {
  title: string;
  children: React.ReactNode;
  onSubmit: (event: any) => void;
  confirmationText?: string;
  onClose: (event: any) => void;
  cancellationText?: string;
  onCancel: (event: any) => void;
  icon?: 'info' | 'warn' | 'alert';
  alert?: boolean;
  processing?: boolean;
}): JSX.Element => {
  const DialogIcon = () =>
    _.head(IconMapping.filter((map: Map) => map.key === icon).map((map: Map) => map.element));

  return (
    <div
      className="modal-dialog fixed inset-0 z-10 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* <div
          onClick={onClose}
          className="fixed inset-0 bg-gray-500/75 transition-opacity"
          aria-hidden="true"
        ></div> */}
        <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between">
              <div>
                <div className="sm:flex sm:items-start">
                  {icon && DialogIcon()}
                  <div className="modal-title mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    {title && <Typography variant={'h6'}>{title}</Typography>}
                  </div>
                </div>
              </div>
              <Link onClick={onClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Link>
            </div>
            <div className="modal-message mt-2">
              <div>{children}</div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <Button
              classes={['sm:ml-3', 'sm:w-auto', 'modal-submit']}
              color={'primary'}
              onClick={onSubmit}
              fullWidth={true}
              disabled={!!processing}
            >
              {confirmationText}
            </Button>
            {!alert && (
              <>
                <Button
                  classes={['mt-3', 'sm:ml-3', 'sm:w-auto', 'sm:mt-0', 'modal-cancel']}
                  fullWidth={true}
                  onClick={onCancel}
                >
                  {cancellationText}
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
