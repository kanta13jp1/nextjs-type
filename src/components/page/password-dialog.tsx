import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosPromise } from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as yup from 'yup';

import { Progress } from '../../components/progress';
import { TextFieldType } from '../../data';
import {
  AuthRepository,
  BaseResponse,
  ChangePasswordRequest,
} from '../../repository/auth-repository';
import { FormErrorMessage, FormLabel } from '../atoms';
import { Confirm } from '../template';

const captains = console;

type FormValues = {
  password: string;
  confirmPassword: string;
};

const schema = yup.object().shape({
  password: yup
    .string()
    .required('入力してください')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'アルファベット（大文字小文字混在）と数字と特殊記号を組み合わせて8文字以上で入力してください',
    ),
  confirmPassword: yup
    .string()
    .required('入力してください')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'アルファベット（大文字小文字混在）と数字と特殊記号を組み合わせて8文字以上で入力してください',
    )
    .oneOf([yup.ref('password'), null], '確認用パスワードが一致していません'),
});

export const PasswordDialog = ({
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
    defaultValues: {
      password: 'Password1?',
      confirmPassword: 'Password1?',
    },
  });
  const mutation = useMutation(
    (req: ChangePasswordRequest): AxiosPromise<BaseResponse> => AuthRepository.changePassword(req),
  );

  const doSubmit = (data: FormValues): void => {
    captains.log(data);
    const request: ChangePasswordRequest = {
      password: data.password,
    };
    mutation.mutate(request, {
      onSuccess: () => {
        onClose(null);
        onSubmit();
      },
    });
  };

  return (
    <>
      <Progress processing={mutation.isLoading} />
      <Confirm
        title={'パスワード変更'}
        onSubmit={handleSubmit(doSubmit)}
        onClose={onClose}
        onCancel={onCancel}
        processing={mutation.isLoading}
      >
        <form className="my-4 w-full px-6">
          <label className="block">
            <FormLabel>新しいパスワード</FormLabel>
            <input
              id="password"
              type={TextFieldType.Password}
              className={`mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-600 ${
                errors.password ? 'border-red-400' : ''
              }`}
              {...register('password')}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </label>

          <label className="mt-5 block">
            <FormLabel>新しいパスワード(確認用)</FormLabel>
            <input
              id="confirmPassword"
              type={TextFieldType.Password}
              className={`mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-600 ${
                errors.confirmPassword ? 'border-red-400' : ''
              }`}
              {...register('confirmPassword')}
            />
            <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
          </label>
        </form>
      </Confirm>
    </>
  );
};

export default PasswordDialog;
