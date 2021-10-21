import React from 'react';
import { Button } from 'antd';
import { history } from 'umi';

export default () => {
  return (
    <Button onClick={() => history.push('/admin/sub-page1')}>跳转1</Button>
  );
};
