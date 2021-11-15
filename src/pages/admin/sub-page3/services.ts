import type { Options } from 'requex';

export const standardSuccess: Options = {
  url: '/api/standard/success',
  method: 'GET',
};

export const nonStandardSuccess: Options<{
  non_standard_msg: string;
  non_standard_code: string;
}> = {
  url: '/api/nonstandard/success',
  method: 'GET',
  isBizSuccess: (res) => {
    return res.non_standard_code
      ? ['200100', '200000'].includes(res.non_standard_code)
      : false;
  },
};

export const networkError: Options = {
  url: '/api/standard/networkError',
  method: 'GET',
};

export const bizError: Options = {
  url: '/api/standard/bizError',
  method: 'GET',
};

export const getWithUrlPattern: Options = {
  url: '/api/getWithUrlPatter/:a/:b',
  method: 'GET',
};
