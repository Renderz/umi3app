import React from 'react';
import { Button, Space } from 'antd';
import { history } from 'umi';

export default () => {
  return (
    <Space>
      <Button onClick={() => history.push('/tabtest/sub-page2')}>
        跳转无参数
      </Button>
      <Button onClick={() => history.push('/tabtest/sub-page2?param=1')}>
        跳转参数1
      </Button>
      <Button onClick={() => history.push('/tabtest/sub-page2?param=2')}>
        跳转参数2
      </Button>
    </Space>
  );
};
