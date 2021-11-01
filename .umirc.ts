import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  mfsu: { production: { output: '.mfsu-production' } },
  history: { type: 'hash' },
  ignoreMomentLocale: true,
  request: {
    dataField: '',
  },
});
