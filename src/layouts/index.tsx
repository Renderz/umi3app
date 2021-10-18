import React, { useState } from 'react';
import { Button, Result, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import Logo from '@/assets/logo.svg';
import defaultProps from './config';

export default () => {
  const [pathname, setPathname] = useState('/');
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...defaultProps}
        logo={Logo}
        title="测试用Title"
        // loading
        location={{
          pathname,
        }}
        waterMarkProps={{
          content: 'xxxxx',
        }}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/');
            }}
          >
            {dom}
          </a>
        )}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
      >
        <PageContainer>
          <div>
            <Result
              status="404"
              style={{
                height: '100%',
                background: '#fff',
              }}
              title="Hello World"
              subTitle="Sorry, you are not authorized to access this page."
              extra={<Button type="primary">Back Home</Button>}
            />
          </div>
        </PageContainer>
      </ProLayout>
    </div>
  );
};
