import React from 'react';
import { Button, Result, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import type { IRouteComponentProps } from 'umi';
import { Link } from 'umi';
import defaultProps from './config';

const Layout: React.FC<IRouteComponentProps> = (props) => {
  const { location } = props;

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        {...defaultProps}
        location={location}
        waterMarkProps={{
          content: 'Pro Layout',
        }}
        menuItemRender={(item, dom) => {
          if (item.isUrl || item.children) {
            return dom;
          }
          if (item.path && location.pathname !== item.path) {
            return <Link to={item.path}>{dom}</Link>;
          }
          return dom;
        }}
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

export default Layout;
