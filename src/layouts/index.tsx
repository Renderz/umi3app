import React from 'react';
import { Avatar, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import type { IRouteComponentProps } from 'umi';
import { UseRequestProvider } from 'umi';
import { Link } from 'umi';
import defaultProps from './config';

const Layout: React.FC<IRouteComponentProps> = (props) => {
  const { location, children } = props;

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        // 菜单配置
        {...defaultProps}
        // 当前位置
        location={location}
        // 水印
        waterMarkProps={{
          content: 'Pro Layout',
        }}
        // 菜单项渲染
        menuItemRender={(item, dom) => {
          if (item.isUrl || item.children) {
            return dom;
          }
          if (item.path && location.pathname !== item.path) {
            return <Link to={item.path}>{dom}</Link>;
          }
          return dom;
        }}
        // 顶部右侧渲染
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
      >
        <PageContainer header={{ title: undefined, breadcrumb: {} }}>
          <div style={{ height: 'calc(100vh - 80px)' }}>
            <UseRequestProvider
              value={{
                onSuccess: (result: API.response, params: [API.Params]) => {
                  if (params?.[0]?.showMessage) {
                    message.success(result.msg);
                  }
                },
              }}
            >
              {children}
            </UseRequestProvider>
          </div>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default Layout;
