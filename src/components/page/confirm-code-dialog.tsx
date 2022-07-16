import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosPromise } from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { Progress } from '../../components/progress';
import { TextFieldType } from '../../data';
import { AuthRepository, BaseResponse, VerifyCodeRequest } from '../../repository/auth-repository';
import { FormErrorMessage, FormLabel } from '../atoms';
import { Confirm } from '../template';

const captains = console;

type FormValues = {
  code: string;
};

const schema = yup.object().shape({
  code: yup.number().required('入力してください'),
});

export const ConfirmCodeModal = ({
  onSubmit,
  onClose,
  onCancel,
}: {
  onSubmit: () => void;
  onClose: (event: any) => void;
  onCancel: (event: any) => void;
}): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const mutation = useMutation(
    (req: VerifyCodeRequest): AxiosPromise<BaseResponse> => AuthRepository.verifyCode(req),
  );

  const doSubmit = (data: FormValues): void => {
    captains.log(data);
    const request: VerifyCodeRequest = {
      code: data.code,
    };
    mutation.mutate(request, {
      onSuccess: () => {
        onClose(null);
        onSubmit();
        toast.success('パスワードを更新しました');
      },
    });
  };

  return (
    <>
      <Progress processing={mutation.isLoading} />
      <Confirm
        title={'認証コードの確認'}
        onSubmit={handleSubmit(doSubmit)}
        onClose={onClose}
        onCancel={onCancel}
        processing={mutation.isLoading}
      >
        <form className="my-4 w-full px-6">
          <label className="block">
            <FormLabel>検証コード</FormLabel>
            <input
              id="code"
              type={TextFieldType.Number}
              className={`mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-600 ${
                errors.code ? 'border-red-400' : ''
              }`}
              {...register('code', {
                valueAsNumber: true,
              })}
            />
            <FormErrorMessage>{errors.code?.message}</FormErrorMessage>
          </label>
        </form>
      </Confirm>
    </>
  );
};

export default ConfirmCodeModal;
