import type { Request, Response } from 'express';

function delay(ms: number, msg?: string) {
  return new Promise((resolve) => setTimeout(() => resolve(msg), ms));
}

export default {
  'GET /api/standard/success': (req: Request, res: Response) => {
    delay(2000).then(() => {
      res.status(200).send({
        msg: '请求GET成功!',
        code: '200000',
      } as API.Response);
    });
  },
  'GET /api/nonstandard/success': (req: Request, res: Response) => {
    delay(2000).then(() => {
      res.status(200).send({
        non_standard_msg: '请求GET成功!',
        non_standard_code: '200000',
      } as API.Response);
    });
  },
  'GET /api/standard/networkError': (req: Request, res: Response) => {
    delay(2000).then(() => {
      res.status(500).send({
        msg: '请求GET网络失败!',
        code: '500100',
      } as API.Response);
    });
  },
  'GET /api/standard/bizError': (req: Request, res: Response) => {
    delay(2000).then(() => {
      res.status(200).send({
        msg: '请求GET业务失败!',
        code: '500100',
      } as API.Response);
    });
  },
  'GET /api/menu': (req: Request, res: Response) => {
    delay(4000).then(() => {
      res.status(200).send([
        {
          uri: '/tabtest',
          title: '多页签测试11',
          children: [
            {
              uri: '/tabtest/sub-page1',
              title: 'a',
            },
            {
              uri: '/tabtest/sub-page2',
              title: 'b',
            },
          ],
        },
      ]);
    });
  },
};
