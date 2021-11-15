import React from 'react';
import { Button, Space, Card, message } from 'antd';
import { request } from '@/utils/request';
import * as services from './services';
// import { useRequest } from 'umi';
import { useRequest } from '@umijs/hooks';

export default () => {
  const standardSuccessRequest = useRequest(
    (showMessage?: boolean) => {
      return request(
        services.standardSuccess,
        showMessage
          ? {}
          : {
              onSuccess: (res) => {
                console.log(res);
              },
            },
      );
    },
    {
      manual: true,
    },
  );

  const nonstandardSuccessRequest = useRequest(
    () => {
      return request(services.nonStandardSuccess, {
        onSuccess: (res) => {
          message.success(res.non_standard_msg);
        },
      });
    },
    {
      manual: true,
    },
  );

  const networkErrRequest = useRequest(
    () => {
      return request(services.networkError);
    },
    {
      manual: true,
    },
  );

  const bizErrRequest = useRequest(
    () => {
      return request(services.bizError);
    },
    {
      manual: true,
    },
  );

  const getWithUrlPatternRequest = useRequest(
    (payload: { a: string; b: string; [propName: string]: string }) => {
      return request(services.getWithUrlPattern, {
        extraData: payload,
      });
    },
    {
      manual: true,
    },
  );

  return (
    <React.Fragment>
      <Card title="网络请求">
        <Space>
          <Button
            loading={standardSuccessRequest.loading}
            onClick={() => standardSuccessRequest.run(true)}
          >
            标准成功显示message
          </Button>
          <Button
            loading={standardSuccessRequest.loading}
            onClick={() => standardSuccessRequest.run(false)}
          >
            标准成功不显示message
          </Button>
          <Button
            loading={nonstandardSuccessRequest.loading}
            onClick={() => nonstandardSuccessRequest.run()}
          >
            不标准返回
          </Button>
        </Space>
      </Card>
      <br />
      <Card title="错误">
        <Space>
          <Button
            danger
            loading={networkErrRequest.loading}
            onClick={() => networkErrRequest.run()}
          >
            网络错误
          </Button>
          <Button
            danger
            loading={bizErrRequest.loading}
            onClick={() => bizErrRequest.run()}
          >
            业务错误
          </Button>
        </Space>
      </Card>
      <br />
      <Card title="请求带参数">
        <Space>
          <Button
            loading={getWithUrlPatternRequest.loading}
            onClick={() =>
              getWithUrlPatternRequest.run({ a: 'test1', b: 'test2' })
            }
          >
            GET请求带url参数
          </Button>
          <Button
            loading={getWithUrlPatternRequest.loading}
            onClick={() =>
              getWithUrlPatternRequest.run({
                a: 'test3',
                b: 'test4',
                c: 'rest5',
              })
            }
          >
            GET请求带url参数和params
          </Button>
        </Space>
      </Card>
    </React.Fragment>
  );
};
