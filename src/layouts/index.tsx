import React from 'react';
import { Avatar, Tabs } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import type { MenuDataItem } from '@ant-design/pro-layout';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import type { IRouteComponentProps } from 'umi';
import { Link } from 'umi';
import { useKeepAlive } from '@/utils/hooks';
import getComponents from '@/utils/getComponent';
import defaultProps from './config';

import { request } from '@/utils/request';

type RawMenu = {
  uri: string;
  title: string;
  children?: RawMenu[];
};

const loopMenuItem = (menus?: RawMenu[]): MenuDataItem[] => {
  if (!menus) {
    return [];
  }
  return menus?.map((menu) => ({
    path: menu.uri,
    name: menu.title,
    children: loopMenuItem(menu.children),
  }));
};

const Layout: React.FC<IRouteComponentProps> = (props) => {
  const { location } = props;

  const keepAlive = useKeepAlive();

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
        menu={{
          request: async () => {
            const response = await request<void, RawMenu[] | undefined>({
              url: '/api/menu',
              method: 'GET',
              isBizSuccess: (res) => {
                return res ? res.length > 0 : false;
              },
            });

            if (response.success) {
              return loopMenuItem(response.data);
            }

            return [];
          },
        }}
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
          <div style={{ height: 'calc(200vh - 80px)' }}>
            <Tabs
              hideAdd
              type="editable-card"
              onChange={(key) => keepAlive.change(key)}
              onEdit={(key) => {
                if (typeof key === 'string') {
                  keepAlive.remove(key);
                }
              }}
              activeKey={keepAlive.currKey}
            >
              {keepAlive.tabList.map((tab) => {
                return (
                  <Tabs.TabPane tab={getComponents(tab)?.title} key={tab}>
                    {getComponents(tab)?.component}
                  </Tabs.TabPane>
                );
              })}
            </Tabs>
          </div>
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default Layout;
