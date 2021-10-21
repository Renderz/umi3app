function delay(ms: number, msg?: string) {
  return new Promise((resolve) => setTimeout(() => resolve(msg), ms));
}

type Response = {
  data: any;
  message: string;
  code: string;
  success: boolean;
};

export default {
  'GET /api/base': (req, res) => {
    delay(2000).then(() => {
      res.send({
        data: {
          a: 1,
          b: 2,
        },
        message: '请求GET成功!',
        code: '200000',
        success: true,
      });
    });
  },
  'GET /api/error': (req, res) => {
    delay(2000).then(() => {
      res.status(500).send({
        code: '500577',
        message: '一般错误',
      });
    });
  },
};
