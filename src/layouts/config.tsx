import React from 'react';
import {
  SmileOutlined,
  CrownOutlined,
  TabletOutlined,
  AntDesignOutlined,
} from '@ant-design/icons';

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/welcome',
        name: '欢迎',
        icon: <SmileOutlined />,
      },
      {
        path: '/admin',
        name: '管理页',
        icon: <CrownOutlined />,
        access: 'canAdmin',
        routes: [
          {
            path: '/admin/sub-page1',
            name: '一级页面',
            icon: <CrownOutlined />,
            component: () => import('@/pages/admin/sub-page1'),
          },
          {
            path: '/admin/sub-page2',
            name: '二级页面',
            icon: <CrownOutlined />,
          },
          {
            path: '/admin/sub-page3',
            name: '请求测试',
            icon: <CrownOutlined />,
          },
        ],
      },
      {
        path: '/tabtest',
        name: '多页签测试',
        icon: <CrownOutlined />,
        access: 'canAdmin',
        routes: [
          {
            path: '/tabtest/sub-page1',
            name: '一级页面',
            icon: <CrownOutlined />,
            component: () => import('@/pages/tabtest/sub-page1'),
          },
          {
            path: '/tabtest/sub-page2',
            name: '二级页面',
            icon: <CrownOutlined />,
            component: () => import('@/pages/tabtest/sub-page2'),
          },
        ],
      },
      {
        name: '列表页',
        icon: <TabletOutlined />,
        path: '/list',
        routes: [
          {
            path: '/list/sub-page',
            name: '一级列表页面',
            icon: <CrownOutlined />,
            routes: [
              {
                path: 'sub-sub-page1',
                name: '一一级列表页面',
                icon: <CrownOutlined />,
              },
              {
                path: 'sub-sub-page2',
                name: '一二级列表页面',
                icon: <CrownOutlined />,
              },
              {
                path: 'sub-sub-page3',
                name: '一三级列表页面',
                icon: <CrownOutlined />,
              },
            ],
          },
          {
            path: '/list/sub-page2',
            name: '二级列表页面',
            icon: <CrownOutlined />,
          },
          {
            path: '/list/sub-page3',
            name: '三级列表页面',
            icon: <CrownOutlined />,
          },
        ],
      },
      {
        path: 'https://ant.design',
        name: 'Ant Design 官网外链',
        icon: <AntDesignOutlined />,
      },
    ],
  },
  location: {
    pathname: '/',
  },
};
