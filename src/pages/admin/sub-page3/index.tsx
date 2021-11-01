import React from 'react';
import { Button, Space, Card } from 'antd';
import { useRequest } from 'umi';
// import { useRequest as useBaseRequest } from '@umijs/hooks';

export default () => {
  const standardSuccessRequest = useRequest<API.response, [API.Params]>(
    { url: '/api/standard/success' },
    { manual: true },
  );

  const nonstandardSuccessRequest = useRequest<API.response, [API.Params]>(
    { url: '/api/nonstandard/success' },
    {
      manual: true,
      onError: (error) => {
        console.log(error);
      },
    },
  );

  const standardNetworkError = useRequest<API.response, [API.Params]>(
    { url: '/api/standard/networkError' },
    {
      manual: true,
    },
  );

  const standardBizError = useRequest<API.response, [API.Params]>(
    { url: '/api/standard/bizError' },
    {
      manual: true,
    },
  );

  return (
    <React.Fragment>
      <Card title="返回体格式">
        <Space>
          <Button
            loading={standardSuccessRequest.loading}
            onClick={() => standardSuccessRequest.run({ showMessage: true })}
          >
            标准成功显示message
          </Button>
          <Button
            loading={standardSuccessRequest.loading}
            onClick={() => standardSuccessRequest.run({ showMessage: false })}
          >
            标准成功不显示message
          </Button>
          <Button
            loading={nonstandardSuccessRequest.loading}
            onClick={() => nonstandardSuccessRequest.run({ showMessage: true })}
          >
            不标准成功
          </Button>
          <Button
            loading={standardNetworkError.loading}
            onClick={() => standardNetworkError.run({ showMessage: true })}
            danger
          >
            网络失败
          </Button>
          <Button
            loading={standardBizError.loading}
            onClick={() => standardBizError.run({ showMessage: true })}
            danger
          >
            网络成功业务失败
          </Button>
        </Space>
      </Card>
    </React.Fragment>
  );
};
