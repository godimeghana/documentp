
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/documentp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/documentp"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5151, hash: 'c40e4248540226707c43502a4f2fd2af5badbd643b9e07741790bf101a4101cb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1123, hash: '6efc5181ab2635fbe6d1093c6395c66d73b4ee212cf03baf6eefeee11d768e5b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22861, hash: '8f2894ff5b52dafc71958294d0182818d3e7dd00763c66074358bae5cb64d7be', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VW5KS2LP.css': {size: 258060, hash: 'f6oZADOhIV4', text: () => import('./assets-chunks/styles-VW5KS2LP_css.mjs').then(m => m.default)}
  },
};
