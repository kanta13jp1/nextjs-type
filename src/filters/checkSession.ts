import { ParsedUrlQuery } from 'node:querystring';

import { GetServerSidePropsContext } from 'next';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { destroyCookie } from 'nookies';

import { GlobalState } from '../data/global-state';
import TokenHelper from '../helpers/token';

const captains = console;

type SessionCookie = NextApiRequestCookies & {
  state?: string;
};

export const checkSession =
  (f: (ctx: GetServerSidePropsContext<ParsedUrlQuery>) => any): any =>
  async (ctx: GetServerSidePropsContext<ParsedUrlQuery>) => {
    try {
      const cookie = ctx.req.cookies as SessionCookie;
      const { session } = JSON.parse(cookie.state as string) as GlobalState;
      TokenHelper.verify(session.jwtToken);
      return f(ctx);
    } catch (e) {
      captains.warn('cookie is invalid... redirect to login page');
      destroyCookie(ctx, 'state');
      return {
        redirect: {
          permanent: false, // 永続的なリダイレクトかどうか
          destination: '/login', // リダイレクト先
        },
      };
    }
  };
