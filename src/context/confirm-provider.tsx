import React, { useCallback, useState } from 'react';

import Confirm from '../components/template/confirm';
import { DialogOptions } from '../data/dialog-options';
import ConfirmContext from './confirm-context';

const DEFAULT_OPTIONS: DialogOptions = {
  html: false,
  alert: false,
  title: '',
  description: '',
  confirmationText: 'Ok',
  cancellationText: 'Cancel',
};

const buildOptions = (options: DialogOptions): DialogOptions => {
  return {
    ...DEFAULT_OPTIONS,
    ...options,
  };
};

export const ConfirmProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [options, setOptions] = useState<DialogOptions>({ ...DEFAULT_OPTIONS });
  const [resolveReject, setResolveReject] = useState([]);
  const [resolve, reject] = resolveReject;

  const confirm = useCallback((options: DialogOptions): Promise<void> => {
    return new Promise((resolve, reject) => {
      setOptions(buildOptions(options));
      setResolveReject([resolve as never, reject as never]);
    });
  }, []);

  const handleClose = useCallback(() => {
    setResolveReject([]);
  }, []);

  const handleCancel = useCallback(() => {
    reject;
    handleClose();
  }, [reject, handleClose]);

  const handleConfirm = useCallback(() => {
    resolve;
    handleClose();
  }, [resolve, handleClose]);

  return (
    <>
      {resolveReject.length === 2 && (
        <>
          <Confirm
            {...options}
            onSubmit={handleConfirm}
            onClose={handleClose}
            onCancel={handleCancel}
          >
            {options.html ? (
              options.description
            ) : (
              <p className="px-5 py-1 text-sm text-gray-500">{options.description}</p>
            )}
          </Confirm>
        </>
      )}
      <ConfirmContext.Provider value={{ confirm }}>{children}</ConfirmContext.Provider>
    </>
  );
};

export default ConfirmProvider;
