export default function markdownToHtml(content: any) {
  const MarkdownIt = require('markdown-it')
  const { html5Media } = require('markdown-it-html5-media');
  const md = new MarkdownIt({
    html: false
  })
    .use(require('markdown-it-katex-external'))
    .use(require('markdown-it-emoji'))
	.use(html5Media)
  return md.render(content)
}
