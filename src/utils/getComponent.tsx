import React from 'react';
import Loadable from 'react-loadable';
import config from '@/layouts/config';
import type { Route } from '@ant-design/pro-layout/lib/typings';

type component = {
  key?: string;
  title?: string;
  component?: React.ReactNode;
};

const components: component[] = [];

const Loading = () => <span>Loading...</span>;

const getComponents = (
  routes: (Route & { component?: () => Promise<React.FC> })[],
) => {
  routes.forEach(async (route) => {
    if (route.routes && route.routes.length > 0) {
      getComponents(route.routes);
    }
    const Component = route.component
      ? Loadable({
          loader: route.component,
          loading: Loading,
          delay: 150,
        })
      : undefined;
    components.push({
      key: route.path,
      title: route.name,
      component: Component ? <Component /> : undefined,
    });
  });
};

getComponents(config.route.routes);

export default (key: string) => {
  return components.find((component) => {
    return component.key === key.split('?')[0];
  });
};
