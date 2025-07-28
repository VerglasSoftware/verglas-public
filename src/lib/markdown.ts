import { marked } from 'marked';

// Configure marked options
marked.setOptions({
  gfm: true, // GitHub Flavored Markdown
  breaks: true, // Convert \n to <br>
});

export function parseMarkdown(markdown: string): string {
  const result = marked.parse(markdown);
  return typeof result === 'string' ? result : '';
}
