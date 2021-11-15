import React from 'react';
import { Button, Space, Input, Form } from 'antd';
import { history } from 'umi';
import { useLocationWithQuery } from '@/utils/hooks';

export default () => {
  const location = useLocationWithQuery<{ param?: string }>();

  return (
    <Space>
      <Form name="form">
        <Form.Item
          name="param"
          label="url参数"
          initialValue={location.query.param}
        >
          <Input />
        </Form.Item>
        <Form.Item name="input" label="输入框">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button onClick={() => history.goBack()}>返回</Button>
        </Form.Item>
      </Form>
    </Space>
  );
};
