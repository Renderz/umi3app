import type { RequestConfig } from 'umi';

export const request: RequestConfig = {
  errorConfig: {
    adaptor: (res: API.response) => {
      return {
        ...res,
        data: res,
        success:
          res.code !== undefined && ['200000', '200100'].includes(res.code),
        errorMessage: res.msg,
      };
    },
  },
};
