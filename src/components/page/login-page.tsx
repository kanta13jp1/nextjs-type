import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError, AxiosPromise, AxiosResponse } from 'axios';
import isAfter from 'date-fns/isAfter';
import jwt from 'jsonwebtoken';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { Button, FormErrorMessage, FormLabel, Link, Typography } from '../../components/atoms';
import Logo from '../../components/logo';
import { Progress } from '../../components/progress';
import GlobalContext from '../../context/global-context';
import { TextFieldType } from '../../data';
import useConfirm from '../../hooks/useConfirm';
import { AuthRepository, AuthRequest, AuthResponse } from '../../repository/auth-repository';

const captains = console;

type FormValues = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  rememberMe: boolean;
};

const schema = yup.object().shape({
  firstName: yup.string().required('入力してください').max(4, '最大文字数を超えています'),
  lastName: yup.string().required('入力してください').max(4, '最大文字数を超えています'),
  age: yup.number().required('入力してください').max(4, '最大値を超えています'),
  email: yup.string().required('入力してください').email('メールアドレスを入力してください'),
  password: yup
    .string()
    .required('入力してください')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'アルファベット（大文字小文字混在）と数字と特殊記号を組み合わせて8文字以上で入力してください',
    ),
});

export const LoginPage = ({
  passwordModalOpen,
}: {
  passwordModalOpen: () => void;
}): JSX.Element => {
  const router = useRouter();
  const mutation = useMutation(
    (req: AuthRequest): AxiosPromise<AuthResponse> => AuthRepository.signIn(req),
  );
  const context = useContext(GlobalContext);
  const confirm = useConfirm();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      age: 0,
      // email: 'test@test.com',
      // password: 'Password1?',
      rememberMe: Boolean(parseCookies(null).rememberMe),
    },
  });

  captains.log(watch());
  captains.log('errors', errors);

  useEffect(() => {
    const rememberMe = Boolean(parseCookies(null).rememberMe);
    const { jwtToken } = context.state.session;
    const decodedToken = jwt.decode(jwtToken, {
      complete: true,
    });
    if (decodedToken) {
      const exp = new Date((decodedToken?.payload.exp as number) * 1000);
      if (rememberMe && isAfter(exp, new Date())) {
        router.push('/').then(() => setTimeout(() => toast('自動ログインしました'), 100));
      } else {
        context.clearState();
      }
    }
  }, [parseCookies(null).rememberMe]);

  const rememberMe = async (event: any): Promise<void> => {
    if (event.target.checked) {
      const cancel = await confirm({
        title: '自動ログイン設定',
        icon: 'info',
        description: '自動ログインを有効にしますか？',
      })
        .then(() => {
          setCookie(null, 'rememberMe', 'true');
        })
        .catch(() => {
          return true;
        });
      if (cancel) {
        event.target.checked = false;
        event.preventDefault();
      }
    } else {
      const cancel = await confirm({
        title: '自動ログイン設定',
        icon: 'info',
        description: '自動ログインを無効にしますか？',
      })
        .then(() => {
          destroyCookie(null, 'rememberMe');
        })
        .catch(() => {
          return true;
        });
      if (cancel) {
        event.target.checked = true;
        event.preventDefault();
      }
    }
  };

  const doSubmit = (data: FormValues): void => {
    captains.log('doSubmit()');
    captains.log(data);
    const authRequest: AuthRequest = {
      id: data.email,
      password: data.password,
    };
    mutation.mutate(authRequest, {
      onSuccess: async (res: AxiosResponse<AuthResponse>) => {
        context.updateState({
          session: {
            username: data.email,
            jwtToken: res.data.token,
            sub: 'sub',
          },
        });
        await router.push('/');
        setTimeout(() => toast('ログインしました'), 100); // display toast after screen transition
      },
      onError: async (error: unknown) => {
        if (error) {
          if ((error as AxiosError).response) {
            if ((error as AxiosError)!.response!.status === 401) {
              confirm({
                title: '認証エラー',
                alert: true,
                icon: 'warn',
                description: 'Emailもしくはパスワードが誤っています',
              });
            }
          }
        } else {
          confirm({
            title: 'システムエラー',
            alert: true,
            icon: 'alert',
            description: 'エラーが発生しました。しばらくしてからもう一度お試しください。',
          });
        }
      },
    });
  };

  return (
    <>
      <Progress processing={mutation.isLoading} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="referrer" content="always" />
      </Head>
      <div className="flex h-screen items-center justify-center bg-gray-200 px-6">
        <div className="w-full max-w-sm rounded-md bg-white p-6 shadow-md">
          <div className="flex items-center justify-center">
            <Logo />
            <Typography variant="h4">Dashboard</Typography>
          </div>

          <form className="mt-4" onSubmit={handleSubmit(doSubmit)}>
            <label className="block">
              <FormLabel>FirstName</FormLabel>
              <input
                id="firstName"
                type={TextFieldType.Text}
                className={`mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-600 ${
                  errors.firstName ? 'border-red-400' : ''
                }`}
                {...register('firstName')}
              />
              <FormErrorMessage classes={['mt-1', 'firstName-error-message-area']}>
                {errors.firstName?.message}
              </FormErrorMessage>
              <FormLabel>LastName</FormLabel>
              <input
                id="lastName"
                type={TextFieldType.Text}
                className={`mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-600 ${
                  errors.lastName ? 'border-red-400' : ''
                }`}
                {...register('lastName')}
              />
              <FormErrorMessage classes={['mt-1', 'lastName-error-message-area']}>
                {errors.lastName?.message}
              </FormErrorMessage>
              <FormLabel>Age</FormLabel>
              <input
                id="age"
                type={TextFieldType.Text}
                className={`mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-600 ${
                  errors.lastName ? 'border-red-400' : ''
                }`}
                {...register('age')}
              />
              <FormErrorMessage classes={['mt-1', 'age-error-message-area']}>
                {errors.age?.message}
              </FormErrorMessage>
              <FormLabel>Email</FormLabel>
              <input
                id="email"
                type={TextFieldType.Email}
                className={`mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-600 ${
                  errors.email ? 'border-red-400' : ''
                }`}
                {...register('email')}
              />
              <FormErrorMessage classes={['mt-1', 'email-error-message-area']}>
                {errors.email?.message}
              </FormErrorMessage>
            </label>

            <label className="mt-3 block">
              <FormLabel>Password</FormLabel>
              <input
                id="password"
                type={TextFieldType.Password}
                className={`mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-600 ${
                  errors.password ? 'border-red-400' : ''
                }`}
                {...register('password')}
              />
              <FormErrorMessage classes={['mt-1', 'password-error-message-area']}>
                {errors.password?.message}
              </FormErrorMessage>
            </label>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <label className="inline-flex items-center">
                  <input
                    onClick={rememberMe}
                    id="rememberMe"
                    type="checkbox"
                    className="form-checkbox text-indigo-600"
                    {...register('rememberMe')}
                  />
                  <Typography variant={'body2'} classes={['mx-2']}>
                    Remember me
                  </Typography>
                </label>
              </div>

              <div>
                <Link onClick={passwordModalOpen}>Forgot your password?</Link>
              </div>
            </div>

            <div className="mt-6">
              <Button color={'primary'} fullWidth={true} disabled={mutation.isLoading}>
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
