import React from 'react';
import { Button, Space } from 'antd';
import { useRequest } from 'umi';

export default () => {
  const baseReq = useRequest({ url: '/api/base' }, { manual: true });
  const errReq = useRequest({ url: '/api/error' }, { manual: true });

  return (
    <Space>
      <Button loading={baseReq.loading} onClick={() => baseReq.run()}>
        请求base
      </Button>
      <Button loading={errReq.loading} onClick={() => errReq.run()} danger>
        请求error
      </Button>
    </Space>
  );
};
