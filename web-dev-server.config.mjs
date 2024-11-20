import { esbuildPlugin } from '@web/dev-server-esbuild';
import sassRewritePath  from './web-dev-server/middlewares/sassRewritePath.mjs';
import customHTMLPlugin from './web-dev-server/plugins/custom-html-plugin.mjs';
import customCssPlugin from './web-dev-server/plugins/custom-css-plugin.mjs';

export default {
  open: true,
  watch: true,
  nodeResolve: true,
  appIndex: 'demo/index.html',
  plugins: [
    customHTMLPlugin,
    customCssPlugin,
    esbuildPlugin({ ts: true, tsconfig:'./tsconfig.json' })
  ],
  middleware: [sassRewritePath],
};
