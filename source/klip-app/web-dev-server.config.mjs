// import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';
import json from '@rollup/plugin-json';
import { rollupAdapter } from '@web/dev-server-rollup';

/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  nodeResolve: true,
  open: '/',
  watch: !hmr,

  /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
  // esbuildTarget: 'auto'

  /** Set appIndex to enable SPA routing */
  appIndex: 'index.html',

  /** Confgure bare import resolve plugin */
  // nodeResolve: {
  //   exportConditions: ['browser', 'development']
  // },
  mimeTypes: {
    // serve all json files as js
    '../build/contracts/*.json': 'js',
    '**/*.json': 'js',
    // serve .module.css files as js
    '**/*.module.css': 'js',
  },
  plugins: [
    rollupAdapter(json())
    /** Use Hot Module Replacement by uncommenting. Requires @open-wc/dev-server-hmr plugin */
    // hmr && hmrPlugin({ exclude: ['**/*/node_modules/**/*'], presets: [presets.litElement] }),
  ],

  // See documentation for all available options
});
