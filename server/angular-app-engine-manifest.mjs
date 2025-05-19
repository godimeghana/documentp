
export default {
  basePath: 'https://godimeghana.github.io/documentp',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
