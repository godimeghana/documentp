
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://godimeghana.github.io/documentp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/documentp"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5180, hash: 'aa5deac42513320732696afbfd73c1b9a4313e440c3fc00a91025e450a246524', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1152, hash: '7cb8e6119ee64951cd0df9d858e9fa19e0ab30bc4e5e82e5681813198299bb70', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 27399, hash: 'a6754cef3aba2c46e5ff0bc85a6a2be2e524dc57c16d33e129addd58d4dfaf6e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VW5KS2LP.css': {size: 258060, hash: 'f6oZADOhIV4', text: () => import('./assets-chunks/styles-VW5KS2LP_css.mjs').then(m => m.default)}
  },
};
