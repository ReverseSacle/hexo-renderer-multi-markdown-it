/* global hexo */

'use strict';

hexo.config.markdown = Object.assign({
  render: {},
  plugins: {}
}, hexo.config.markdown);

hexo.config.markdown.render = Object.assign({
  html: true,
  xhtmlOut: false,
  breaks: true,
  linkify: true,
  typographer: true,
  quotes: '“”‘’',
  tab: ''
}, hexo.config.markdown.render);


const renderer = require('./lib/renderer');

hexo.extend.renderer.register('md', 'html', renderer, true);
hexo.extend.renderer.register('markdown', 'html', renderer, true);
hexo.extend.renderer.register('mkd', 'html', renderer, true);
hexo.extend.renderer.register('mkdn', 'html', renderer, true);
hexo.extend.renderer.register('mdwn', 'html', renderer, true);
hexo.extend.renderer.register('mdtxt', 'html', renderer, true);
hexo.extend.renderer.register('mdtext', 'html', renderer, true);