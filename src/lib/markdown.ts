import { marked } from "marked";

marked.setOptions({
  gfm: true,
  breaks: true,
});

export function parseMarkdown(markdown: string): string {
  const result = marked.parse(markdown);
  return typeof result === "string" ? result : "";
}
